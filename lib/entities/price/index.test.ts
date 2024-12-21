import { pricify, Price } from "@entities";
import { LOG_PREFIX } from "@constants";
import { RoundStrategy } from "@enums";

describe.each([
  {
    name: "Price constructor",
    util: (amount: number) => new Price(amount),
  },
  {
    name: "Price function",
    util: pricify,
  },
])("$name tests", ({ util }) => {
  describe("Add method tests", () => {
    test("should return added price", () => {
      expect(util(5.625).add(2).valueOf()).toBeCloseTo(7.625);
      expect(util(5.625).add(util(2.375)).valueOf()).toBeCloseTo(8);
      expect(util(0.1).add(0.2).valueOf()).toBeCloseTo(0.3);
      expect(util(Number.MAX_VALUE).add(1).valueOf()).toBe(
        Number.MAX_VALUE + 1
      );
      expect(util(Number.MIN_VALUE).add(-1).valueOf()).toBe(
        Number.MIN_VALUE - 1
      );
    });
  });

  describe("Subtract method tests", () => {
    test("should return subtracted price", () => {
      expect(util(5.625).subtract(2).valueOf()).toBeCloseTo(3.625);
      expect(util(5.625).subtract(util(1.625)).valueOf()).toBeCloseTo(4);
      expect(util(0.3).subtract(0.1).valueOf()).toBeCloseTo(0.2);
      expect(util(Number.MIN_VALUE).subtract(1).valueOf()).toBe(
        Number.MIN_VALUE - 1
      );
      expect(util(Number.MAX_VALUE).subtract(-1).valueOf()).toBe(
        Number.MAX_VALUE + 1
      );
    });
  });

  describe("Multiply method tests", () => {
    test("should return multiplied price", () => {
      expect(util(5.625).multiply(2).valueOf()).toBeCloseTo(11.25);
      expect(util(5.625).multiply(util(0.5)).valueOf()).toBeCloseTo(2.8125);
      expect(util(0.1).multiply(0.2).valueOf()).toBeCloseTo(0.02);
      expect(util(Number.MAX_VALUE).multiply(0).valueOf()).toBe(0);
      expect(util(Number.MIN_VALUE).multiply(0).valueOf()).toBe(0);
    });
  });

  describe("Divide method tests", () => {
    test("should return divided numbers", () => {
      expect(util(5.625).divide(2).valueOf()).toBeCloseTo(2.8125);
      expect(util(5.625).divide(util(0.25)).valueOf()).toBeCloseTo(22.5);
      expect(util(0.1).divide(0.2).valueOf()).toBeCloseTo(0.5);
    });

    test("should throw an error when dividing by zero", () => {
      expect(() => util(5.625).divide(0)).toThrowError(
        LOG_PREFIX + "Cannot divide by zero."
      );
      expect(() => util(5.625).divide(util(0))).toThrowError(
        LOG_PREFIX + "Cannot divide by zero."
      );
    });

    test("should handle division by very small numbers", () => {
      expect(util(5.625).divide(Number.MIN_VALUE).valueOf()).toBe(Infinity);
      expect(util(5.625).divide(-Number.MIN_VALUE).valueOf()).toBe(-Infinity);
    });
  });

  describe("Round method tests", () => {
    test("should return rounded numbers", () => {
      expect(util(5.625).round(2, RoundStrategy.UP).valueOf()).toBe(5.63);
      expect(util(5.625).round(2, RoundStrategy.DOWN).valueOf()).toBe(5.62);
      expect(util(5.625).round(2, RoundStrategy.NEAREST).valueOf()).toBe(5.63);
      expect(util(5.624).round(2, RoundStrategy.NEAREST).valueOf()).toBe(5.62);
      expect(util(5.625).round(0).valueOf()).toBe(6);
    });
  });

  describe("Discount method tests", () => {
    test("should return discounted price with 0-1 rate", () => {
      expect(util(100).discount(0.1).valueOf()).toBe(90);
      expect(util(50).discount(0.5).valueOf()).toBe(25);
      expect(util(25).discount(0).valueOf()).toBe(25);
      expect(util(12.5).discount(1).valueOf()).toBe(0);
    });

    test("should return discounted price with 0-100 rate", () => {
      expect(util(100).discount(10).valueOf()).toBe(90);
      expect(util(50).discount(50).valueOf()).toBe(25);
      expect(util(25).discount(0).valueOf()).toBe(25);
      expect(util(12.5).discount(100).valueOf()).toBe(0);
    });

    test("should throw an error for invalid discount rates", () => {
      expect(() => util(100).discount(-0.1)).toThrowError(
        LOG_PREFIX + "Discount rate must be between 0-1 or 0-100."
      );
      expect(() => util(100).discount(100.1)).toThrowError(
        LOG_PREFIX + "Discount rate must be between 0-1 or 0-100."
      );
    });

    test("should handle large numbers", () => {
      expect(
        util(Number.MAX_VALUE / 2)
          .discount(0.5)
          .valueOf()
      ).toBeCloseTo(Number.MAX_VALUE / 4);
    });
  });

  describe("Equal method tests", () => {
    test("should return true for equal prices", () => {
      expect(util(0.1).add(0.2).equal(0.3)).toBe(true);
      expect(util(Math.PI).equal(Math.PI)).toBe(true);
      expect(util(0.1).add(0.2).equal(util(0.3))).toBe(true);
    });

    test("should return false for unequal prices", () => {
      expect(util(0.1).equal(0.2)).toBe(false);
      expect(util(0.1).equal(util(0.2))).toBe(false);
    });
  });

  describe("Integer method tests", () => {
    test("should return the integer part", () => {
      expect(util(5.625).integer()).toBe(5);
      expect(util(0).integer()).toBe(0);
    });
  });

  describe("Fraction method tests", () => {
    test("should return the fractional part", () => {
      expect(util(5.625).fraction()).toBeCloseTo(0.625);
      expect(util(-3.14).fraction()).toBeCloseTo(-0.14);
      expect(util(0).fraction()).toBe(0);
    });
  });
});
