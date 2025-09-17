import { test, expect } from "@playwright/test";

test("User can login", async ({ page }) => {
  // Navigate to the login page
  await page.goto("https://demo.applitools.com/");

  // Fill in the login form
  await page.fill("#username", "testUser");
  await page.fill("#password", "testPassword");

  // Click the login button
  await page.click("#log-in");

  // Assert that the user is redirected to the dashboard
  await expect(page).toHaveURL("https://demo.applitools.com/app.html");
});

test.skip("User can access the dashboard", async ({ page }) => {
  // Navigate to the dashboard directly
  await page.goto("https://demo.applitools.com/app.html");

  // Implement login from helper - DEMO PURPOSES

  //await login(page, "testUser", "testPassword");

  // Assert that the dashboard contains expected elements
  await expect(page.locator(".element-container")).toBeVisible();
  await expect(page.locator("text=Financial Overview")).toBeVisible();
});
