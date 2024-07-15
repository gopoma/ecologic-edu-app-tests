import { test, expect } from '@playwright/test';

test('Test0001', async ({ page }) => {
    await page.goto('https://ecologic-edu-app.vercel.app/');
    await expect(page.getByRole('heading', { name: 'Potenciando la Conciencia' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Potenciando la Conciencia Ambiental');
    await expect(page.getByRole('heading', { name: 'Educar' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Proyectos', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sugerencias' })).toBeVisible();
    await page.getByText('ProyectosVe el impacto de').click();
    await page.getByRole('heading', { name: 'Educar' }).click();
    await page.getByRole('heading', { name: 'Sugerencias' }).click();
    await expect(page.getByRole('heading', { name: 'Guías Ambientales' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Proyectos de Sostenibilidad' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Vida Sostenible' })).toBeVisible();
});
