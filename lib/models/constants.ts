export const PACKAGE_NAME = "price.js";
export const LOG_PREFIX = `[${PACKAGE_NAME}] `;
export const DEFAULT_FRACTION_DELIMITER = ".";
export const DEFAULT_THOUSAND_DELIMITER = ",";
export const DEFAULT_TEMPLATE_PRECISION = 2;
export const TEMPLATE_OPTIONS_DELIMETER = "|";
export const TEMPLATE_PARSER_REGEX = /\{([^}]+)\}/g;
export const COUNTRIES = [
  {
    countryCode: "AD",
    currency: "EUR",
  },
  {
    countryCode: "AE",
    currency: "AED",
  },
  {
    countryCode: "AF",
    currency: "AFN",
  },
  {
    countryCode: "AG",
    currency: "XCD",
  },
  {
    countryCode: "AI",
    currency: "XCD",
  },
  {
    countryCode: "AL",
    currency: "ALL",
  },
  {
    countryCode: "AM",
    currency: "AMD",
  },
  {
    countryCode: "AO",
    currency: "AOA",
  },
  {
    countryCode: "AR",
    currency: "ARS",
  },
  {
    countryCode: "AS",
    currency: "USD",
  },
  {
    countryCode: "AT",
    currency: "EUR",
  },
  {
    countryCode: "AU",
    currency: "AUD",
  },
  {
    countryCode: "AW",
    currency: "AWG",
  },
  {
    countryCode: "AX",
    currency: "EUR",
  },
  {
    countryCode: "AZ",
    currency: "AZN",
  },
  {
    countryCode: "BA",
    currency: "BAM",
  },
  {
    countryCode: "BB",
    currency: "BBD",
  },
  {
    countryCode: "BD",
    currency: "BDT",
  },
  {
    countryCode: "BE",
    currency: "EUR",
  },
  {
    countryCode: "BF",
    currency: "XOF",
  },
  {
    countryCode: "BG",
    currency: "BGN",
  },
  {
    countryCode: "BH",
    currency: "BHD",
  },
  {
    countryCode: "BI",
    currency: "BIF",
  },
  {
    countryCode: "BJ",
    currency: "XOF",
  },
  {
    countryCode: "BL",
    currency: "EUR",
  },
  {
    countryCode: "BM",
    currency: "BMD",
  },
  {
    countryCode: "BN",
    currency: "BND",
  },
  {
    countryCode: "BO",
    currency: "BOB",
  },
  {
    countryCode: "BQ",
    currency: "USD",
  },
  {
    countryCode: "BR",
    currency: "BRL",
  },
  {
    countryCode: "BS",
    currency: "BSD",
  },
  {
    countryCode: "BT",
    currency: "BTN",
  },
  {
    countryCode: "BV",
    currency: "NOK",
  },
  {
    countryCode: "BW",
    currency: "BWP",
  },
  {
    countryCode: "BY",
    currency: "BYR",
  },
  {
    countryCode: "BZ",
    currency: "BZD",
  },
  {
    countryCode: "CA",
    currency: "CAD",
  },
  {
    countryCode: "CC",
    currency: "AUD",
  },
  {
    countryCode: "CD",
    currency: "CDF",
  },
  {
    countryCode: "CF",
    currency: "XAF",
  },
  {
    countryCode: "CG",
    currency: "XAF",
  },
  {
    countryCode: "CH",
    currency: "CHF",
  },
  {
    countryCode: "CI",
    currency: "XOF",
  },
  {
    countryCode: "CK",
    currency: "NZD",
  },
  {
    countryCode: "CL",
    currency: "CLP",
  },
  {
    countryCode: "CM",
    currency: "XAF",
  },
  {
    countryCode: "CN",
    currency: "CNY",
  },
  {
    countryCode: "CO",
    currency: "COP",
  },
  {
    countryCode: "CR",
    currency: "CRC",
  },
  {
    countryCode: "CU",
    currency: "CUP",
  },
  {
    countryCode: "CV",
    currency: "CVE",
  },
  {
    countryCode: "CW",
    currency: "ANG",
  },
  {
    countryCode: "CX",
    currency: "AUD",
  },
  {
    countryCode: "CY",
    currency: "EUR",
  },
  {
    countryCode: "CZ",
    currency: "CZK",
  },
  {
    countryCode: "DE",
    currency: "EUR",
  },
  {
    countryCode: "DJ",
    currency: "DJF",
  },
  {
    countryCode: "DK",
    currency: "DKK",
  },
  {
    countryCode: "DM",
    currency: "XCD",
  },
  {
    countryCode: "DO",
    currency: "DOP",
  },
  {
    countryCode: "DZ",
    currency: "DZD",
  },
  {
    countryCode: "EC",
    currency: "USD",
  },
  {
    countryCode: "EE",
    currency: "EUR",
  },
  {
    countryCode: "EG",
    currency: "EGP",
  },
  {
    countryCode: "EH",
    currency: "MAD",
  },
  {
    countryCode: "ER",
    currency: "ERN",
  },
  {
    countryCode: "ES",
    currency: "EUR",
  },
  {
    countryCode: "ET",
    currency: "ETB",
  },
  {
    countryCode: "FI",
    currency: "EUR",
  },
  {
    countryCode: "FJ",
    currency: "FJD",
  },
  {
    countryCode: "FK",
    currency: "FKP",
  },
  {
    countryCode: "FM",
    currency: "USD",
  },
  {
    countryCode: "FO",
    currency: "DKK",
  },
  {
    countryCode: "FR",
    currency: "EUR",
  },
  {
    countryCode: "GA",
    currency: "XAF",
  },
  {
    countryCode: "GB",
    currency: "GBP",
  },
  {
    countryCode: "GD",
    currency: "XCD",
  },
  {
    countryCode: "GE",
    currency: "GEL",
  },
  {
    countryCode: "GF",
    currency: "EUR",
  },
  {
    countryCode: "GG",
    currency: "GBP",
  },
  {
    countryCode: "GH",
    currency: "GHS",
  },
  {
    countryCode: "GI",
    currency: "GIP",
  },
  {
    countryCode: "GL",
    currency: "DKK",
  },
  {
    countryCode: "GM",
    currency: "GMD",
  },
  {
    countryCode: "GN",
    currency: "GNF",
  },
  {
    countryCode: "GP",
    currency: "EUR",
  },
  {
    countryCode: "GQ",
    currency: "XAF",
  },
  {
    countryCode: "GR",
    currency: "EUR",
  },
  {
    countryCode: "GS",
    currency: "GBP",
  },
  {
    countryCode: "GT",
    currency: "GTQ",
  },
  {
    countryCode: "GU",
    currency: "USD",
  },
  {
    countryCode: "GW",
    currency: "XOF",
  },
  {
    countryCode: "GY",
    currency: "GYD",
  },
  {
    countryCode: "HK",
    currency: "HKD",
  },
  {
    countryCode: "HM",
    currency: "AUD",
  },
  {
    countryCode: "HN",
    currency: "HNL",
  },
  {
    countryCode: "HR",
    currency: "HRK",
  },
  {
    countryCode: "HT",
    currency: "HTG",
  },
  {
    countryCode: "HU",
    currency: "HUF",
  },
  {
    countryCode: "ID",
    currency: "IDR",
  },
  {
    countryCode: "IE",
    currency: "EUR",
  },
  {
    countryCode: "IL",
    currency: "ILS",
  },
  {
    countryCode: "IM",
    currency: "GBP",
  },
  {
    countryCode: "IN",
    currency: "INR",
  },
  {
    countryCode: "IO",
    currency: "USD",
  },
  {
    countryCode: "IQ",
    currency: "IQD",
  },
  {
    countryCode: "IR",
    currency: "IRR",
  },
  {
    countryCode: "IS",
    currency: "ISK",
  },
  {
    countryCode: "IT",
    currency: "EUR",
  },
  {
    countryCode: "JE",
    currency: "GBP",
  },
  {
    countryCode: "JM",
    currency: "JMD",
  },
  {
    countryCode: "JO",
    currency: "JOD",
  },
  {
    countryCode: "JP",
    currency: "JPY",
  },
  {
    countryCode: "KE",
    currency: "KES",
  },
  {
    countryCode: "KG",
    currency: "KGS",
  },
  {
    countryCode: "KH",
    currency: "KHR",
  },
  {
    countryCode: "KI",
    currency: "AUD",
  },
  {
    countryCode: "KM",
    currency: "KMF",
  },
  {
    countryCode: "KN",
    currency: "XCD",
  },
  {
    countryCode: "KP",
    currency: "KPW",
  },
  {
    countryCode: "KR",
    currency: "KRW",
  },
  {
    countryCode: "KW",
    currency: "KWD",
  },
  {
    countryCode: "KY",
    currency: "KYD",
  },
  {
    countryCode: "KZ",
    currency: "KZT",
  },
  {
    countryCode: "LA",
    currency: "LAK",
  },
  {
    countryCode: "LB",
    currency: "LBP",
  },
  {
    countryCode: "LC",
    currency: "XCD",
  },
  {
    countryCode: "LI",
    currency: "CHF",
  },
  {
    countryCode: "LK",
    currency: "LKR",
  },
  {
    countryCode: "LR",
    currency: "LRD",
  },
  {
    countryCode: "LS",
    currency: "LSL",
  },
  {
    countryCode: "LT",
    currency: "EUR",
  },
  {
    countryCode: "LU",
    currency: "EUR",
  },
  {
    countryCode: "LV",
    currency: "EUR",
  },
  {
    countryCode: "LY",
    currency: "LYD",
  },
  {
    countryCode: "MA",
    currency: "MAD",
  },
  {
    countryCode: "MC",
    currency: "EUR",
  },
  {
    countryCode: "MD",
    currency: "MDL",
  },
  {
    countryCode: "ME",
    currency: "EUR",
  },
  {
    countryCode: "MF",
    currency: "EUR",
  },
  {
    countryCode: "MG",
    currency: "MGA",
  },
  {
    countryCode: "MH",
    currency: "USD",
  },
  {
    countryCode: "MK",
    currency: "MKD",
  },
  {
    countryCode: "ML",
    currency: "XOF",
  },
  {
    countryCode: "MM",
    currency: "MMK",
  },
  {
    countryCode: "MN",
    currency: "MNT",
  },
  {
    countryCode: "MO",
    currency: "MOP",
  },
  {
    countryCode: "MP",
    currency: "USD",
  },
  {
    countryCode: "MQ",
    currency: "EUR",
  },
  {
    countryCode: "MR",
    currency: "MRO",
  },
  {
    countryCode: "MS",
    currency: "XCD",
  },
  {
    countryCode: "MT",
    currency: "EUR",
  },
  {
    countryCode: "MU",
    currency: "MUR",
  },
  {
    countryCode: "MV",
    currency: "MVR",
  },
  {
    countryCode: "MW",
    currency: "MWK",
  },
  {
    countryCode: "MX",
    currency: "MXN",
  },
  {
    countryCode: "MY",
    currency: "MYR",
  },
  {
    countryCode: "MZ",
    currency: "MZN",
  },
  {
    countryCode: "NA",
    currency: "NAD",
  },
  {
    countryCode: "NC",
    currency: "XPF",
  },
  {
    countryCode: "NE",
    currency: "XOF",
  },
  {
    countryCode: "NF",
    currency: "AUD",
  },
  {
    countryCode: "NG",
    currency: "NGN",
  },
  {
    countryCode: "NI",
    currency: "NIO",
  },
  {
    countryCode: "NL",
    currency: "EUR",
  },
  {
    countryCode: "NO",
    currency: "NOK",
  },
  {
    countryCode: "NP",
    currency: "NPR",
  },
  {
    countryCode: "NR",
    currency: "AUD",
  },
  {
    countryCode: "NU",
    currency: "NZD",
  },
  {
    countryCode: "NZ",
    currency: "NZD",
  },
  {
    countryCode: "OM",
    currency: "OMR",
  },
  {
    countryCode: "PA",
    currency: "PAB",
  },
  {
    countryCode: "PE",
    currency: "PEN",
  },
  {
    countryCode: "PF",
    currency: "XPF",
  },
  {
    countryCode: "PG",
    currency: "PGK",
  },
  {
    countryCode: "PH",
    currency: "PHP",
  },
  {
    countryCode: "PK",
    currency: "PKR",
  },
  {
    countryCode: "PL",
    currency: "PLN",
  },
  {
    countryCode: "PM",
    currency: "EUR",
  },
  {
    countryCode: "PN",
    currency: "NZD",
  },
  {
    countryCode: "PR",
    currency: "USD",
  },
  {
    countryCode: "PS",
    currency: "ILS",
  },
  {
    countryCode: "PT",
    currency: "EUR",
  },
  {
    countryCode: "PW",
    currency: "USD",
  },
  {
    countryCode: "PY",
    currency: "PYG",
  },
  {
    countryCode: "QA",
    currency: "QAR",
  },
  {
    countryCode: "RE",
    currency: "EUR",
  },
  {
    countryCode: "RO",
    currency: "RON",
  },
  {
    countryCode: "RS",
    currency: "RSD",
  },
  {
    countryCode: "RU",
    currency: "RUB",
  },
  {
    countryCode: "RW",
    currency: "RWF",
  },
  {
    countryCode: "SA",
    currency: "SAR",
  },
  {
    countryCode: "SB",
    currency: "SBD",
  },
  {
    countryCode: "SC",
    currency: "SCR",
  },
  {
    countryCode: "SD",
    currency: "SDG",
  },
  {
    countryCode: "SE",
    currency: "SEK",
  },
  {
    countryCode: "SG",
    currency: "SGD",
  },
  {
    countryCode: "SH",
    currency: "SHP",
  },
  {
    countryCode: "SI",
    currency: "EUR",
  },
  {
    countryCode: "SJ",
    currency: "NOK",
  },
  {
    countryCode: "SK",
    currency: "EUR",
  },
  {
    countryCode: "SL",
    currency: "SLL",
  },
  {
    countryCode: "SM",
    currency: "EUR",
  },
  {
    countryCode: "SN",
    currency: "XOF",
  },
  {
    countryCode: "SO",
    currency: "SOS",
  },
  {
    countryCode: "SR",
    currency: "SRD",
  },
  {
    countryCode: "SS",
    currency: "SSP",
  },
  {
    countryCode: "ST",
    currency: "STD",
  },
  {
    countryCode: "SV",
    currency: "USD",
  },
  {
    countryCode: "SX",
    currency: "ANG",
  },
  {
    countryCode: "SY",
    currency: "SYP",
  },
  {
    countryCode: "SZ",
    currency: "SZL",
  },
  {
    countryCode: "TC",
    currency: "USD",
  },
  {
    countryCode: "TD",
    currency: "XAF",
  },
  {
    countryCode: "TF",
    currency: "EUR",
  },
  {
    countryCode: "TG",
    currency: "XOF",
  },
  {
    countryCode: "TH",
    currency: "THB",
  },
  {
    countryCode: "TJ",
    currency: "TJS",
  },
  {
    countryCode: "TK",
    currency: "NZD",
  },
  {
    countryCode: "TL",
    currency: "USD",
  },
  {
    countryCode: "TM",
    currency: "TMT",
  },
  {
    countryCode: "TN",
    currency: "TND",
  },
  {
    countryCode: "TO",
    currency: "TOP",
  },
  {
    countryCode: "TR",
    currency: "TRY",
  },
  {
    countryCode: "TT",
    currency: "TTD",
  },
  {
    countryCode: "TV",
    currency: "AUD",
  },
  {
    countryCode: "TW",
    currency: "TWD",
  },
  {
    countryCode: "TZ",
    currency: "TZS",
  },
  {
    countryCode: "UA",
    currency: "UAH",
  },
  {
    countryCode: "UG",
    currency: "UGX",
  },
  {
    countryCode: "UM",
    currency: "USD",
  },
  {
    countryCode: "US",
    currency: "USD",
  },
  {
    countryCode: "UY",
    currency: "UYU",
  },
  {
    countryCode: "UZ",
    currency: "UZS",
  },
  {
    countryCode: "VA",
    currency: "EUR",
  },
  {
    countryCode: "VC",
    currency: "XCD",
  },
  {
    countryCode: "VE",
    currency: "VEF",
  },
  {
    countryCode: "VG",
    currency: "USD",
  },
  {
    countryCode: "VI",
    currency: "USD",
  },
  {
    countryCode: "VN",
    currency: "VND",
  },
  {
    countryCode: "VU",
    currency: "VUV",
  },
  {
    countryCode: "WF",
    currency: "XPF",
  },
  {
    countryCode: "WS",
    currency: "WST",
  },
  {
    countryCode: "XK",
    currency: "EUR",
  },
  {
    countryCode: "YE",
    currency: "YER",
  },
  {
    countryCode: "YT",
    currency: "EUR",
  },
  {
    countryCode: "ZA",
    currency: "ZAR",
  },
  {
    countryCode: "ZM",
    currency: "ZMW",
  },
  {
    countryCode: "ZW",
    currency: "ZWD",
  },
] as const;
