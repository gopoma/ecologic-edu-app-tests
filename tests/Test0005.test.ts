import { test, expect } from '@playwright/test';

test('Test0005', async ({ page }) => {
    await page.goto('https://ecologic-edu-app.vercel.app/');
    await expect(page.getByRole('heading', { name: 'Potenciando la Conciencia' })).toBeVisible();
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: 'Historias' }).first().click();
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: 'Ecología' }).nth(1).click();
    await expect(page.getByRole('list').first()).toBeVisible();
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: 'Sugerencias' }).first().click();
    await page.waitForTimeout(3000);
});
