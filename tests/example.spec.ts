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

