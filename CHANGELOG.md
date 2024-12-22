# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2024-12-22

### Added

- Added `PriceFormatter` class for formatting prices with templates by locales.
  - Supports formatting based on locale (e.g., en-US, tr-TR).
  - Allows custom templates for defining the order and symbols of currency, thousands separators, and decimal separators.
  - Supports currency symbol overrides.
  - Provides options for trailing zero display and rounding strategies.
  - Includes helper functions for parsing templates and formatting integers.
- Added `format` method to `Price` class for formatting via price.

## [1.0.0] - 2024-12-21

### Added

- Added `Price` class for handling price values and calculations.
- Added `pricify` function for creating `Price` instances.
- Added `add`, `subtract`, `multiply`, `divide`, `round`, `discount`, `equal`, `integer`, `fraction`, `valueOf` and `toString` methods.

## [0.0.0] - 2024-12-21

- Initialized :tada:
