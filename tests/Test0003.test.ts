import { test, expect } from '@playwright/test';

test('Test0003', async ({ page }) => {
    await page.goto('https://ecologic-edu-app.vercel.app/');
    await expect(page.getByRole('heading', { name: 'Potenciando la Conciencia' })).toBeVisible();
    await page.getByRole('link', { name: 'Ecología' }).nth(1).click();
    await expect(page.getByRole('list').first()).toBeVisible();
    await page.waitForTimeout(5000);
});
