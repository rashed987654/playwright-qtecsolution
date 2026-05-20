//  Helper function with test.step()   use this 
import { test, expect } from "@playwright/test";

// ServiceMenuHoverAndSubmenuVisibility
export async function ServiceMenuHoverAndSubmenuVisibility(page) {
  const servicesMenu = page.getByRole("link", { name: "Services", exact: true });

     // Services Menu Visibility
    await test.step("Services Menu → Verify Visibility", async () => {
      await expect(servicesMenu).toBeVisible();
    });

    // Services Menu Hover
    await test.step("Services Menu → Verify Hover", async () => {
      await servicesMenu.hover();
    });
    
}


export async function VerifyAndNavigateToServicesPage(page) {
  const servicesMenu = page.getByRole("link", { name: "Services", exact: true });

     // Services Menu Visibility
    await test.step("Services Menu → Verify Visibility", async () => {
      await expect(servicesMenu).toBeVisible();
    });

    // Services Menu Hover
    await test.step("Services Menu → Verify Hover", async () => {
      await servicesMenu.hover();
    });

    // Services Menu href
    await test.step("Services Menu → Verify Href", async () => {
      await expect(servicesMenu).toHaveAttribute("href","https://staging.qtecsolution.com/services");
    });

    // Services Menu Click
    await test.step("Services Menu → Verify Click", async () => {
      await servicesMenu.click();
    });

    // Services Menu URL
    await test.step("Services Menu → Verify URL", async () => {
        await expect(page).toHaveURL(/\/services\/?$/);
    });
    
}






export async function reloadServicesPage(page) {
  await test.step("Reload and reopen Services page", async () => {
    await page.goto("https://staging.qtecsolution.com/");
    await VerifyAndNavigateToServicesPage(page);
  });
}

    



