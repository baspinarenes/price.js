import {
  DEFAULT_FRACTION_DELIMITER,
  DEFAULT_TEMPLATE_PRECISION,
  DEFAULT_THOUSAND_DELIMITER,
} from "@constants";
import { TemplatePart } from "@types";

export const isValidLocale = (locale: string): boolean => {
  return /^(?:[a-z]{2}-)?[A-Z]{2}$/.test(locale);
};

export const templateHandlers: Record<
  string,
  (rest: string[]) => TemplatePart
> = {
  thousand: ([delimiter = DEFAULT_THOUSAND_DELIMITER]) => ({
    type: "thousand",
    delimiter,
  }),
  fraction: ([
    precision = DEFAULT_TEMPLATE_PRECISION,
    delimiter = DEFAULT_FRACTION_DELIMITER,
  ]) => ({
    type: "fraction",
    delimiter,
    precision: Number(precision),
  }),
  currency: () => ({ type: "currency" }),
};

export const intlPartHandlers: Record<string, (value: string) => TemplatePart> =
  {
    group: (value: string) => ({ type: "thousand", delimiter: value }),
    decimal: (value: string) => ({ type: "fraction", delimiter: value }),
    currency: () => ({ type: "currency" }),
  };

export const formatIntegerWithDelimiter = (x: number, delimiter: string) => {
  const thousands = String(x).match(/\d{1,3}(?=(\d{3})*$)|\d{1,3}$/g)!;
  return thousands.join(delimiter);
};
