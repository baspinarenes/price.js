import { LOG_PREFIX } from "@constants";
import { RoundStrategy } from "@enums";
import { PriceFormatterOptions, PriceParts } from "@types";
import {
  ceil,
  divide,
  equal,
  floor,
  minus,
  multiply,
  plus,
  round,
} from "@utils";
import { PriceFormatter } from "@entities";

export class Price {
  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  add(amount: number | Price): Price {
    return new Price(plus(this.amount, this.getAmountValue(amount)));
  }

  subtract(amount: number | Price): Price {
    return new Price(minus(this.amount, this.getAmountValue(amount)));
  }

  multiply(amount: number | Price): Price {
    return new Price(multiply(this.amount, this.getAmountValue(amount)));
  }

  divide(amount: number | Price): Price {
    if (this.getAmountValue(amount) === 0) {
      throw new Error(LOG_PREFIX + "Cannot divide by zero.");
    }

    return new Price(divide(this.amount, this.getAmountValue(amount)));
  }

  round(
    decimals: number,
    strategy: RoundStrategy = RoundStrategy.NEAREST
  ): Price {
    let roundedValue: number;

    switch (strategy) {
      case RoundStrategy.UP:
        roundedValue = ceil(this.amount, decimals);
        break;
      case RoundStrategy.DOWN:
        roundedValue = floor(this.amount, decimals);
        break;
      case RoundStrategy.NEAREST:
      default:
        roundedValue = round(this.amount, decimals);
        break;
    }

    return new Price(roundedValue);
  }

  discount(rate: number): Price {
    if (rate < 0 || rate > 100) {
      throw new Error(
        LOG_PREFIX + "Discount rate must be between 0-1 or 0-100."
      );
    }

    return this.multiply(1 - (rate > 1 ? rate / 100 : rate));
  }

  equals(amount: number | Price): boolean {
    return equal(this.amount, this.getAmountValue(amount));
  }

  toInt(): number {
    return floor(this.amount, 0);
  }

  toFraction(): number {
    return minus(this.amount, this.toInt());
  }

  format(options: PriceFormatterOptions): string {
    return PriceFormatter.create(options).format(this);
  }

  formatToParts(options: PriceFormatterOptions): PriceParts {
    return PriceFormatter.create(options).formatToParts(this);
  }

  valueOf(): number {
    return this.amount;
  }

  toString(): string {
    return String(this.amount);
  }

  // Helpers

  private getAmountValue(price: number | Price): number {
    return price instanceof Price ? price.amount : price;
  }
}

export const pricify = (amount: number) => new Price(amount);
export const price = pricify;
