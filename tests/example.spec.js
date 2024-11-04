const { test, expect } = require('@playwright/test');

test.describe('Negative Test Scenarios for Registration Page', () => {
  test.beforeEach(async ({ page }) => {
      await page.goto('https://koshelek.ru/authorization/signup');
  });

  test('should show error for empty email field', async ({ page }) => {
      await page.fill('input[name="email"]', '');
      await page.click('button[type="submit"]');
      const errorMessage = await page.locator('.error-message').textContent();
      expect(errorMessage).toContain('Email is required');
  });

  // test('should show error for invalid email format', async ({ page }) => {
  //     await page.fill('input[name="email"]', 'invalid-email');
  //     await page.click('button[type="submit"]');
  //     const errorMessage = await page.locator('.error-message').textContent();
  //     expect(errorMessage).toContain('Please enter a valid email address');
  // });

  // test('should show error for empty password field', async ({ page }) => {
  //     await page.fill('input[name="password"]', '');
  //     await page.click('button[type="submit"]');
  //     const errorMessage = await page.locator('.error-message').textContent();
  //     expect(errorMessage).toContain('Password is required');
  // });

  // test('should show error for password less than minimum length', async ({ page }) => {
  //     await page.fill('input[name="password"]', '123');
  //     await page.click('button[type="submit"]');
  //     const errorMessage = await page.locator('.error-message').textContent();
  //     expect(errorMessage).toContain('Password must be at least 6 characters long');
  // });

  // test('should show error for mismatched passwords', async ({ page }) => {
  //     await page.fill('input[name="password"]', 'password123');
  //     await page.fill('input[name="confirmPassword"]', 'differentPassword');
  //     await page.click('button[type="submit"]');
  //     const errorMessage = await page.locator('.error-message').textContent();
  //     expect(errorMessage).toContain('Passwords do not match');
  // });

  // test('should show error for already registered email', async ({ page }) => {
  //     // Assuming 'existing@example.com' is already registered
  //     await page.fill('input[name="email"]', 'existing@example.com');
  //     await page.fill('input[name="password"]', 'validPassword123');
  //     await page.click('button[type="submit"]');
  //     const errorMessage = await page.locator('.error-message').textContent();
  //     expect(errorMessage).toContain('Email is already in use');
  // });
});