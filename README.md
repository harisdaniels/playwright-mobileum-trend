# Playwright Automation Tests

This repository contains end-to-end (E2E) tests written using [Playwright](https://playwright.dev/) for web application automation.

## 📦 Project Structure
├── tests/ # Test files
├── pages/ # Page Object Models (optional)
├── playwright.config.ts # Playwright test configuration
├── package.json
└── README.md



## 📁 Example Test
```typescript

import { test, expect } from '@playwright/test';
import CoffeWarehousePage from '../pages/coffee-warehouse-page';

test('Assert Trend March 2020', async ({ page }) => {
  const coffeeWarehouse: CoffeWarehousePage = new CoffeWarehousePage(page);
  await coffeeWarehouse.goTo();

  await coffeeWarehouse.organicTeamMarch2020.hover({ force: true });
  await page.waitForTimeout(1000);
  const pointForOrganicInMarch = page.locator('circle.k-chart-point').nth(9);
  await expect(pointForOrganicInMarch).toHaveAttribute('aria-label', '4011.75');


  await coffeeWarehouse.tigerTeamMarch2020.hover({ force: true });
  await page.waitForTimeout(1000);
  const pointForTigerInMarch = page.locator('circle.k-chart-point').nth(11);
  await expect(pointForTigerInMarch).toHaveAttribute('aria-label', '15810');


  await coffeeWarehouse.lemonTeamMarch2020.hover({ force: true });
  await page.waitForTimeout(1000);
  const pointForLemonInMarch = page.locator('circle.k-chart-point').nth(10);
  await expect(pointForLemonInMarch).toHaveAttribute('aria-label', '3574.8');


  await coffeeWarehouse.oceanTeamMarch2020.hover({ force: true });
  await page.waitForTimeout(1000)
  const pointForOceanInMarch = page.locator('circle.k-chart-point').nth(8);
  await expect(pointForOceanInMarch).toHaveAttribute('aria-label', '4813.5');
});

```


## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/harisdaniels/playwright-mobileum-trend
cd playwright-mobileum-trend
```
### 2. Install dependencies
```bash
npm install
```

### 3. Install Playwright browsers
```bash
npx playwright install
```

### 4. Run all tests
```bash
npx playwright test
```

### 5. Run a specific test
```bash
npx playwright test tests/example.spec.ts
```

### 6. Run tests in headed mode (for debugging)
```bash
npx playwright test --headed
```

### 7. Generate HTML report
```bash
npx playwright show-report
```

