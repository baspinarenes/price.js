import { LOG_PREFIX } from "@constants";
import { RoundStrategy } from "@enums";
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

export class Price {
  private value: number;

  constructor(v: number) {
    this.value = v;
  }

  add(amount: number | Price): Price {
    return new Price(plus(this.value, this.getAmountValue(amount)));
  }

  subtract(amount: number | Price): Price {
    return new Price(minus(this.value, this.getAmountValue(amount)));
  }

  multiply(amount: number | Price): Price {
    return new Price(multiply(this.value, this.getAmountValue(amount)));
  }

  divide(amount: number | Price): Price {
    if (this.getAmountValue(amount) === 0) {
      throw new Error(LOG_PREFIX + "Cannot divide by zero.");
    }

    return new Price(divide(this.value, this.getAmountValue(amount)));
  }

  round(
    decimals: number,
    strategy: RoundStrategy = RoundStrategy.NEAREST
  ): Price {
    let roundedValue: number;

    switch (strategy) {
      case RoundStrategy.UP:
        roundedValue = ceil(this.value, decimals);
        break;
      case RoundStrategy.DOWN:
        roundedValue = floor(this.value, decimals);
        break;
      case RoundStrategy.NEAREST:
      default:
        roundedValue = round(this.value, decimals);
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

  equal(amount: number | Price): boolean {
    return equal(this.value, this.getAmountValue(amount));
  }

  integer(): number {
    return floor(this.value, 0);
  }

  fraction(): number {
    return minus(this.value, this.integer());
  }

  valueOf(): number {
    return this.value;
  }

  toString(): string {
    return String(this.value);
  }

  // Helpers

  private getAmountValue(price: number | Price): number {
    return price instanceof Price ? price.value : price;
  }
}

export function pricify(value: number) {
  return new Price(value);
}
