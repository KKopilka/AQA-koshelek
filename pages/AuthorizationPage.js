const { expect } = require('@playwright/test');

exports.Authorization = class Authorization {

  /**
  * @param {import('@playwright/test').Page} page
  */

  constructor(page) {
    this.page = page;
    this.btnSignUp  = page.getByRole('link', { name: 'Зарегистрироваться' });
    this.btnSignIn = page.getByRole('link', { name: 'Войти' });
    this.btnThemeColor = page.locator('button[name="system\\.light-mode--colorable"]');
    this.btnAcademy = page.locator('#app-header a').filter({ hasText: 'Академия' });
    this.btnP2P = page.locator('#app-header a').filter({ hasText: 'P2P' });
    this.btnInternationalExchange = page.locator('#app-header a').filter({ hasText: 'Международный обмен' });
    // this.inpUsername = page.locator('#input-1728');
    this.inpUsername = page.getByLabel('Имя пользователя');
    this.inpEmail = page.locator('#username');
    this.inpPassword = page.locator('#new-password');
    this.inpReferralCode = page.getByLabel('Реферальный код');
    this.chkbxAgreement = page.locator('#input-3250');
    this.btnNext = page.getByRole('button', { name: 'Далее' });
    this.btnOpenPassword = page.getByLabel('preview open');
    this.btnClosePassword = page.getByLabel('preview close');
    this.btnLoginQrCode = page.getByTestId('qr');
    this.btnLoginTelegram = page.getByTestId('telegram');
    this.btnLoginGoogle = page.getByTestId('google');
    this.btnLoginApple = page.getByTestId('apple');
  }

  async emptyInput() {
    await this.btnNext.click();
    // Получаем все элементы с сообщением "Поле не заполнено"
    const errorMessages = this.page.locator('span.k-text', { hasText: 'Поле не заполнено' });
    
    // Ожидаем, что таких сообщений будет ровно три
    await expect(errorMessages).toHaveCount(3);

    // Дополнительно проверяем, что текст каждого сообщения - "Поле не заполнено"
    for (let i = 0; i < 3; i++) {
      await expect(errorMessages.nth(i)).toHaveText('Поле не заполнено');
      console.log(`Ошибка ${i + 1}: Поле не заполнено - найдено на странице.`);
    }
  }

  async shortUsername(errorMessage = 'Имя пользователя недействительно') {
    await this.inpUsername.fill('abc');
    await this.btnNext.click();
    await this.page.waitForTimeout(3000);
    const error = this.page.locator('.v-card > .css-grid');
    await expect(error).toContainText(errorMessage);
  }

  async longUsername(errorMessage = 'Имя пользователя недействительно') {
    await this.inpUsername.fill('a'.repeat(33));
    await this.btnNext.click();
    await this.page.waitForTimeout(3000);
    const error = this.page.locator('.v-card > .css-grid');
    await expect(error).toContainText(errorMessage);
  }

  async startsInvalidCharacterUsername(errorMessage = 'Имя пользователя недействительно') {
    await this.inpUsername.fill('1username');
    await this.btnNext.click();
    await this.page.waitForTimeout(3000);
    const error = this.page.locator('.v-card > .css-grid');
    await expect(error).toContainText(errorMessage);
  }

  async containsInvalidCharacterUsername() {
    await this.inpUsername.fill('user!name');
    const errorMessage = this.page.locator('span.k-text', { 
      hasText: 'Введены недопустимые символы: !' 
    });
    await expect(errorMessage).toBeVisible();
  }

  async incorrectEmailFormat() {
    await this.inpEmail.fill('userexample.com');
    await this.btnNext.click();
    await expect(this.page.locator('span.k-text', { 
      hasText: 'Формат e-mail: username@test.ru' 
    })).toBeVisible();

    await this.inpEmail.fill('user@wrongdomain');
    await this.btnNext.click();
    await expect(this.page.locator('span.k-text', { 
      hasText: 'Формат e-mail: username@test.ru' 
    })).toBeVisible();
  }

  async shortPassword() {
    await this.inpPassword.fill('abcabc');
    await this.btnNext.click();
    await expect(this.page.locator('span.k-text', { 
      hasText: 'Пароль должен содержать минимум 8 символов' 
    })).toBeVisible();
  }

  async longPassword() {
    await this.inpPassword.fill('a'.repeat(65));
    await this.btnNext.click();
    await expect(this.page.locator('span.k-text', { 
      hasText: 'Превышен лимит символов: 64 максимум' 
    })).toBeVisible();  
  }

  async lowercasePassword() {
    await this.inpPassword.fill('abba2233445566');
    await this.btnNext.click();
    await expect(this.page.locator('span.k-text', { 
      hasText: 'Пароль должен содержать от 8 до 64 символов, включая заглавные буквы и цифры' 
    })).toBeVisible();  
  }

  async uppercasePassword() {
    await this.inpPassword.fill('ABBA2233445566');
    await this.btnNext.click();
    await expect(this.page.locator('span.k-text', { 
      hasText: 'Пароль должен содержать от 8 до 64 символов, включая заглавные буквы и цифры' 
    })).toBeVisible();  
  }

  async incorrectReferralCodeFormat() {
    await this.inpReferralCode.fill('---');
    await this.btnNext.isDisabled();
    await expect(this.page.locator('span.k-text', { 
      hasText: 'Неверный формат ссылки' 
    })).toBeVisible();  
  }
}
