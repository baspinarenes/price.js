import { PriceFormatter } from "@entities";
import { Price } from "../price";
import { PriceFormatterOptions } from "@types";
import { LOG_PREFIX } from "@constants";

describe("PriceFormatter tests", () => {
  describe("Create method tests", () => {
    test("should create a PriceFormatter instance with locale", () => {
      const formatter = PriceFormatter.create({
        locale: "en-US",
      });

      expect(formatter).toBeInstanceOf(PriceFormatter);
    });

    test("should create a PriceFormatter instance with locale as country code", () => {
      const formatter = PriceFormatter.create({
        locale: "US",
      });

      expect(formatter).toBeInstanceOf(PriceFormatter);
    });

    test("should throw an error for invalid locale", () => {
      const locale = "invalid";
      expect(() => PriceFormatter.create({ locale: "invalid" })).toThrowError(
        `${LOG_PREFIX} Invalid locale: ${locale}`
      );
    });

    test("should throw an error for empty locale", () => {
      const locale = "";
      expect(() => PriceFormatter.create({ locale })).toThrowError(
        `${LOG_PREFIX} Invalid locale: ${locale}`
      );
    });
  });

  describe("Format method tests", () => {
    test("should format number", () => {
      const formatter = PriceFormatter.create({ locale: "en-US" });

      expect(formatter.format(1234.56)).toBe("$1,234.56");
    });

    test("should format Price object", () => {
      const formatter = PriceFormatter.create({ locale: "en-US" });
      const price = new Price(1234.56);

      expect(formatter.format(price)).toBe("$1,234.56");
    });

    test("should format Price object", () => {
      const formatter = PriceFormatter.create({
        locale: "tr-TR",
        templates: {
          "*": "Fiyat: {thousand|.} {fraction|2|,} {currency} ",
        },
        overridedSymbols: {
          "tr-TR": "TL",
        },
      });
      const price = new Price(1234.56);

      expect(formatter.format(price)).toBe("Fiyat: 1.234 ,56 TL ");
    });

    test("should format Price object with overrided symbols", () => {
      const formatter = PriceFormatter.create({
        locale: "tr-TR",
        templates: {
          TR: "{thousand|.}{fraction|2|,} {currency}",
        },
        overridedSymbols: {
          TR: "TL",
        },
      });
      const price = new Price(1234.56);

      expect(formatter.format(price)).toBe("1.234,56 TL");
    });

    test("should format Price with overrided smybols for all locales", () => {
      const formatter = PriceFormatter.create({
        locale: "tr-TR",
        templates: {
          "tr-TR": "{thousand|.}{fraction|2|,} {currency}",
        },
        overridedSymbols: {
          "*": "$",
        },
      });
      const price = new Price(1234.56);

      expect(formatter.format(price)).toBe("1.234,56 $");
    });
  });

  describe("FormatToParts method tests", () => {
    test("should format to parts", () => {
      const formatter = PriceFormatter.create({ locale: "en-US" });
      const parts = formatter.formatToParts(1234.56);

      expect(parts).toEqual({
        currency: "$",
        value: 1234.56,
        integer: "1,234",
        fraction: ".56",
        formatted: "1,234.56",
        display: "$1,234.56",
      });
    });

    test("should format to parts", () => {
      const formatter = PriceFormatter.create({ locale: "en-US" });
      const parts = formatter.formatToParts(100);

      expect(parts).toEqual({
        currency: "$",
        value: 100,
        integer: "100",
        fraction: ".00",
        formatted: "100.00",
        display: "$100.00",
      });
    });

    test("should format to parts with trailingZeroDisplay", () => {
      const formatter = PriceFormatter.create({
        locale: "en-US",
        trailingZeroDisplay: true,
      });
      const parts = formatter.formatToParts(100);

      expect(parts).toEqual({
        currency: "$",
        value: 100,
        integer: "100",
        fraction: "",
        formatted: "100",
        display: "$100",
      });
    });

    test("should format to parts with rounding", () => {
      const formatter = PriceFormatter.create({
        locale: "en-US",
        roundStrategy: "down",
        precision: 1,
      });

      const parts = formatter.formatToParts(new Price(1234.567));

      expect(parts).toEqual({
        currency: "$",
        value: 1234.567,
        integer: "1,234",
        fraction: ".5",
        formatted: "1,234.5",
        display: "$1,234.5",
      });
    });

    test("should format to parts with custom template", () => {
      const customOptions: PriceFormatterOptions = {
        locale: "tr-TR",
        templates: {
          "en-US": "{thousand|,}{fraction|2|.} {currency}",
          "tr-TR": "{thousand|.}{fraction|2|,} {currency}",
        },
      };
      const formatter = PriceFormatter.create(customOptions);
      const parts = formatter.formatToParts(new Price(1234.56));
      expect(parts).toEqual({
        currency: "₺",
        value: 1234.56,
        integer: "1.234",
        fraction: ",56",
        formatted: "1.234,56",
        display: "1.234,56 ₺",
      });
    });

    test("should format to parts with currency override", () => {
      const overrideOptions: PriceFormatterOptions = {
        locale: "tr-TR",
        overridedSymbols: {
          "tr-TR": "TL",
        },
      };
      const formatter = PriceFormatter.create(overrideOptions);
      const parts = formatter.formatToParts(new Price(1234.56));
      expect(parts.currency).toBe("TL");
      expect(parts.display).toBe("TL1.234,56");
    });

    test("should format to parts with trailingZeroDisplay stripIfInteger", () => {
      const optionsWithTrailingZeroDisplay: PriceFormatterOptions = {
        locale: "en-US",
        trailingZeroDisplay: true,
      };
      const formatter = PriceFormatter.create(optionsWithTrailingZeroDisplay);
      expect(formatter.format(1234)).toBe("$1,234");
      expect(formatter.format(1234.5)).toBe("$1,234.5");
      expect(formatter.format(1234.5)).toBe("$1,234.5");
    });
  });

  describe("TrailingZeroDisplay method tests", () => {
    test("should handle trailingZeroDisplay as boolean", () => {
      const formatterTrue = PriceFormatter.create({
        locale: "en-US",
        trailingZeroDisplay: true,
      });
      expect(formatterTrue.format(1234)).toBe("$1,234");
      const formatterFalse = PriceFormatter.create({
        locale: "en-US",
        trailingZeroDisplay: false,
      });
      expect(formatterFalse.format(1234)).toBe("$1,234.00");
    });

    test("should handle trailingZeroDisplay as object", () => {
      const formatterLocale = PriceFormatter.create({
        locale: "en-GB",
        trailingZeroDisplay: { "en-GB": true },
      });
      expect(formatterLocale.format(1234)).toBe("£1,234");

      const formatterCountryCode = PriceFormatter.create({
        locale: "en-US",
        trailingZeroDisplay: { US: true },
      });
      expect(formatterCountryCode.format(1234)).toBe("$1,234");

      const formatterDefault = PriceFormatter.create({
        locale: "en-US",
        trailingZeroDisplay: { "*": true },
      });
      expect(formatterDefault.format(1234)).toBe("$1,234");

      const formatterMixed = PriceFormatter.create({
        locale: "en-US",
        trailingZeroDisplay: { "en-US": false, "*": true },
      });
      expect(formatterMixed.format(1234)).toBe("$1,234.00");
    });
  });
});
