import * as index from "./index";
import { Price, pricify, PriceFormatter } from "@entities";

const allowedExports = { Price, pricify, PriceFormatter };

describe.only("Index tests", () => {
  it("should only export allowed entities", () => {
    const indexExports = Object.keys(index).reduce((acc, key) => {
      if (key !== "__esModule") {
        acc[key] = (index as Record<string, any>)[key];
      }
      return acc;
    }, {} as Record<string, any>);

    expect(indexExports, "Index should contain all allowed exports").toEqual(
      allowedExports
    );
  });
});
