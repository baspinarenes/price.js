import {
  COUNTRIES,
  LOG_PREFIX,
  TEMPLATE_OPTIONS_DELIMETER,
  TEMPLATE_PARSER_REGEX,
} from "@constants";
import type {
  PriceFormatterOptions,
  PriceParts,
  TemplateMap,
  TemplatePart,
} from "@types";
import {
  formatIntegerWithDelimiter,
  intlPartHandlers,
  isValidLocale,
  templateHandlers,
} from "../../utils/template";
import { Price } from "../price";
import { RoundStrategy } from "@enums";

export class PriceFormatter {
  private options: {
    locale: string;
    countryCode: string;
    currency: string;
    templates: TemplateMap;
    overridedSymbols: Record<string, string>;
    trailingZeroDisplay: boolean | Record<string, boolean>;
    roundStrategy: RoundStrategy;
    precision?: number;
  };

  constructor(options: PriceFormatterOptions) {
    const locale = options.locale;

    if (!locale || !isValidLocale(locale)) {
      throw new Error(`${LOG_PREFIX} Invalid locale: ${locale}`);
    }

    const countryCode = locale.includes("-") ? locale.split("-")[1] : locale;
    const country = COUNTRIES.find((c) => c.countryCode === countryCode)!;

    this.options = {
      locale,
      countryCode: country.countryCode,
      overridedSymbols: options?.overridedSymbols || {},
      trailingZeroDisplay: options?.trailingZeroDisplay || {},
      templates: this.parseTemplates(options?.templates),
      currency: country.currency,
      precision: options?.precision,
      roundStrategy:
        (options.roundStrategy as RoundStrategy) || RoundStrategy.NEAREST,
    };
  }

  static create(options: PriceFormatterOptions): PriceFormatter {
    return new PriceFormatter(options);
  }

  public format(amount: number | Price): string {
    const price = amount instanceof Price ? amount : new Price(amount);
    const parts = this.formatToParts(price);
    return parts.display;
  }

  public formatToParts(amount: number | Price): PriceParts {
    let price = amount instanceof Price ? amount : new Price(amount);

    const fractionPart = this.template.find((p) => p.type === "fraction")!;
    const thousandPart = this.template.find((p) => p.type === "thousand")!;

    let manipulatedPrice = price;

    if (fractionPart.precision || this.options.precision) {
      manipulatedPrice = price.round(
        (fractionPart.precision || this.options.precision)!,
        this.options.roundStrategy
      );
    }

    const formattedInteger = formatIntegerWithDelimiter(
      manipulatedPrice.toInt(),
      thousandPart.delimiter
    );

    const formattedFraction = manipulatedPrice.toFraction()
      ? fractionPart.delimiter +
        manipulatedPrice.toFraction().toString().split(/[.,]/)[1]
      : this.trailingZeroDisplay
      ? ""
      : ".00";

    const currency = this.symbol;

    let formatted = "";
    let display = "";

    for (const part of this.template) {
      switch (part.type) {
        case "custom":
          display += part.value;
          break;
        case "thousand":
          display += formattedInteger;
          formatted += formattedInteger;
          break;
        case "fraction":
          display += formattedFraction;
          formatted += formattedFraction;
          break;
        case "currency":
          display += currency;
          break;
      }
    }

    return {
      currency,
      value: price.amount,
      integer: formattedInteger,
      fraction: formattedFraction,
      formatted,
      display,
    };
  }

  private get template(): TemplatePart[] {
    const { templates, locale, countryCode } = this.options;

    if (templates[locale]) return templates[locale];
    if (templates[countryCode]) return templates[countryCode];
    if (templates["*"]) return templates["*"];

    const parsed = this.parseDefaultTemplate();

    const formattedParts = parsed
      .filter((p) => intlPartHandlers[p.type])
      .map((p) => intlPartHandlers[p.type](p.value));

    return formattedParts;
  }

  private get symbol() {
    const { locale, countryCode, overridedSymbols } = this.options;

    if (overridedSymbols[locale]) return overridedSymbols[locale];
    if (overridedSymbols[countryCode]) return overridedSymbols[countryCode];
    if (overridedSymbols["*"]) return overridedSymbols["*"];

    const parsed = this.parseDefaultTemplate();
    return parsed.find((p) => p.type === "currency")!.value;
  }

  private get trailingZeroDisplay(): boolean {
    const { locale, countryCode, trailingZeroDisplay } = this.options;

    if (typeof trailingZeroDisplay === "boolean") return trailingZeroDisplay;
    if (typeof trailingZeroDisplay[locale] !== "undefined")
      return trailingZeroDisplay[locale];
    if (typeof trailingZeroDisplay[countryCode] !== "undefined")
      return trailingZeroDisplay[countryCode];
    if (typeof trailingZeroDisplay["*"] !== "undefined")
      return trailingZeroDisplay["*"];

    return false;
  }

  // Helpers

  private parseDefaultTemplate(): Intl.NumberFormatPart[] {
    const formatter = new Intl.NumberFormat(this.options.locale, {
      style: "currency",
      currency: this.options.currency,
      currencyDisplay: "symbol",
      maximumFractionDigits: 15,
      ...{
        trailingZeroDisplay: this.trailingZeroDisplay
          ? "stripIfInteger"
          : "auto",
      },
    });

    return formatter.formatToParts(1234.567);
  }

  private parseTemplates(templates?: Record<string, string>): TemplateMap {
    const parsedTemplates: TemplateMap = {};

    if (!templates) return parsedTemplates;

    for (const part in templates) {
      parsedTemplates[part] = this.parseTemplate(templates[part]);
    }

    return parsedTemplates;
  }

  private parseTemplate(template: string): TemplatePart[] {
    let parts: TemplatePart[] = [];
    let lastIndex = 0;

    const matches = [...template.matchAll(TEMPLATE_PARSER_REGEX)];

    for (const match of matches) {
      if (match.index > lastIndex) {
        parts.push({
          type: "custom",
          value: template.slice(lastIndex, match.index),
        });
      }

      const content = match[1];
      const [type, ...rest] = content.split(TEMPLATE_OPTIONS_DELIMETER);

      parts.push(templateHandlers[type](rest));

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < template.length) {
      parts.push({ type: "custom", value: template.slice(lastIndex) });
    }

    return parts;
  }
}
