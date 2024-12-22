import { RoundStrategy } from "@enums";

export type PriceFormatterOptions = {
  locale: string;
  templates?: Record<string, string>;
  overridedSymbols?: Record<string, string>;
  trailingZeroDisplay?: boolean | Record<string, boolean>;
  roundStrategy?: `${RoundStrategy}`;
  precision?: number;
};

export type TemplateMap = Record<string, TemplatePart[]>;

export type TemplatePart =
  | CurrencyTemplatePart
  | CustomTemplatePart
  | ThousandTemplatePart
  | FractionTemplatePart;

export type CurrencyTemplatePart = {
  type: "currency";
};

export type CustomTemplatePart = {
  type: "custom";
  value: string;
};

export type ThousandTemplatePart = {
  type: "thousand";
  delimiter: string;
};

export type FractionTemplatePart = {
  type: "fraction";
  delimiter: string;
  precision?: number;
};

export type PriceParts = {
  currency: string;
  value: number;
  integer: string;
  fraction: string;
  formatted: string;
  display: string;
};
