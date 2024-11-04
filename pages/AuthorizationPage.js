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
    this.inpUsername = page.locator('#input-3198');
    this.inpEmail = page.locator('#username');
    this.inpPassword = pahe.locator('#new-password');
    this.inpReferralCode = page.locator('#input-3238');
    this.chkbxAgreement = page.locator('#input-3250');
    this.btnNext = page.getByRole('button', { name: 'Далее' });
    this.btnOpenPassword = page.getByLabel('preview open');
    this.btnClosePassword = page.getByLabel('preview close');
    this.btnLoginQrCode = page.getByTestId('qr');
    this.btnLoginTelegram = page.getByTestId('telegram');
    this.btnLoginGoogle = page.getByTestId('google');
    this.btnLoginApple = page.getByTestId('apple');
  }

  async emptyInputFields() {
    await this.btnNext.click();
  }
}
