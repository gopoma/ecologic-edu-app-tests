import { test, expect } from '@playwright/test';

test('Test0004', async ({ page }) => {
    await page.goto('https://ecologic-edu-app.vercel.app/');
    await expect(page.getByRole('heading', { name: 'Potenciando la Conciencia' })).toBeVisible();
    await page.getByRole('link', { name: 'Sugerencias' }).first().click();
    await page.waitForTimeout(5000);
});
