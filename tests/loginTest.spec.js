import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://consultation-scheduler.azurewebsites.net/');
  await expect(page.getByText('To signup as a student use @students.wits.ac.za. To signup as a lecturer use @wi')).toBeVisible();
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill('John');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('aa11BB@@');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.goto('https://consultation-scheduler.azurewebsites.net/student_dashboard');
  await expect(page.getByRole('button', { name: 'Show Consultations on Calendar' })).toBeVisible();
  await page.waitForTimeout(60000);
  // await page.getByRole('button', { name: 'Show Consultations on Calendar' }).click();
  // await expect(page.locator('a').filter({ hasText: 'John Doe' })).toBeVisible();

  // await page.getByRole('button', { name: 'Clear Consultations on Calendar' }).click();
  await page.close();
});