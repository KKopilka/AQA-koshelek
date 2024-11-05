const { test, expect } = require('@playwright/test');
const { Authorization } = require('../../pages/AuthorizationPage.js');

let authPage;

test.beforeEach(async ({ page }) => {
  authPage = new Authorization(page);
  await page.goto('https://koshelek.ru/authorization/signup');
});

test.describe('Негативные тесты для страницы регистрации', () => {
  test('1. Пыстые поля', async () => {
      await authPage.emptyInput();
  });

  test('2. Имя пользователя короче 6 символов', async () => {
    await authPage.shortUsername();
  });

  test('3. Имя пользователя длиннее 32 символов', async () => {
    await authPage.longUsername();
  });

  test('4. Имя пользователя начинается с недопустимого символа', async () => {
    await authPage.startsInvalidCharacterUsername();
  });

  test('5. Имя пользователя содержит недопустимые символы', async () => {
    await authPage.containsInvalidCharacterUsername();
  });

  test('6. Некорректный формат Email', async () => {
      await authPage.incorrectEmailFormat();
  });

  test('7. Ввод пароля короче 8 символов', async () => {
    await authPage.shortPassword();
  });

  test('8. Ввод пароля длиннее 64 символов', async () => {
    await authPage.longPassword();
  });

  test('9. Ввод пароля без заглавных букв', async () => {
    await authPage.lowercasePassword();
  });

  test('10. Ввод пароля только с заглавными буквами', async () => {
    await authPage.uppercasePassword();
  });

  test('11. Неверный формат реферального кода', async () => {
    await authPage.incorrectReferralCodeFormat();
  });
  
});