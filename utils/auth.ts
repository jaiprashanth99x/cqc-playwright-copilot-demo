// A helper function to login a user at https://demo.applitools.com/
import { Page } from '@playwright/test';

export async function login(page: Page, username: string, password: string) {
  await page.goto('https://demo.applitools.com/');
  await page.fill('#username', username);
  await page.fill('#password', password);
  await page.click('#log-in');
}