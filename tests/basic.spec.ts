import { test, expect } from "@playwright/test";

// Test that the https://demo.applitools.com/ page is working correctly
test.skip("Demo Applitools page should work correctly", async ({ page }) => {
  // Navigate to the demo Applitools page
  await page.goto("https://demo.applitools.com/");
  // Check that the title is correct
  await expect(page).toHaveTitle("ACME Testing Page");
  // Check that the login form is visible
  const loginForm = page.locator("#log-in");
  await expect(loginForm).toBeVisible();
  // Check that the login button is enabled
  const loginButton = loginForm.locator("button[type='submit']");
  await expect(loginButton).toBeEnabled();
});