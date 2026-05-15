//  Helper function with test.step()   use this 
import { test, expect } from "@playwright/test";

export async function openServicesPage(page) {
  const servicesMenu = page.getByRole("link", { name: "Services", exact: true });

     // Services Menu Visibility
    await test.step("Verify Services menu is visible", async () => {
      await expect(servicesMenu).toBeVisible();
    });

    // Services Menu Hover
    await test.step("Hover on Services menu", async () => {
      await servicesMenu.hover();
    });

    // Services Menu href
    await test.step("Services Menu → Verify Href", async () => {
      await expect(servicesMenu).toHaveAttribute("href","https://staging.qtecsolution.com/services");
    });

    // Services Menu Click
    await test.step("Click on Services menu", async () => {
      await servicesMenu.click();
    });

    // Services Menu URL
    await test.step("Verify Services page URL", async () => {
        await expect(page).toHaveURL(/\/services\/?$/);
    });
    
}






export async function reloadServicesPage(page) {
  await test.step("Reload and reopen Services page", async () => {
    await page.goto("https://staging.qtecsolution.com/");
    await openServicesPage(page);
  });
}

    



