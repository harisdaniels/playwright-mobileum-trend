import { expect, Locator, Page } from "@playwright/test";
import { config } from '../config';

export default class CoffeWarehousePage {
  readonly page: Page;
  readonly tigerTeamMarch2020: Locator;
  readonly lemonTeamMarch2020: Locator;
  readonly organicTeamMarch2020: Locator;
  readonly oceanTeamMarch2020: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tigerTeamMarch2020 = page.locator("(//*[name()='circle' and @class='k-chart-point'])[12]");
    this.lemonTeamMarch2020 = page.locator("(//*[name()='circle' and @class='k-chart-point'])[11]");
    this.organicTeamMarch2020 = page.locator("(//*[name()='circle' and @class='k-chart-point'])[10]");
    this.oceanTeamMarch2020 = page.locator("(//*[name()='circle' and @class='k-chart-point'])[9]");
  }

  async goTo() {
    await this.page.goto(config.BASE_URL);
  }
}