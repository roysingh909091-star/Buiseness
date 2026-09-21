import { test, expect } from '@playwright/test';

test('approved target is reachable', async ({ page }) => {
  test.skip(!process.env.BASE_URL, 'Set BASE_URL to an approved staging or preview URL before running browser tests.');

    const response = await page.goto('/', { waitUntil: 'domcontentloaded' });
      expect(response).not.toBeNull();
        expect(response!.ok()).toBeTruthy();
          await expect(page.locator('body')).toBeVisible();
          });
          
