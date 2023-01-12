import { chromium } from '@playwright/test'

async function globalSetup() {
  const URL = 'http://localhost:8910'
  const browser = await chromium.launch()
  const adminLogin = await browser.newPage()
  await adminLogin.goto(`${URL}/login`)

  const usernameInput = adminLogin.getByTestId('input-field-username')
  await usernameInput.click()
  await usernameInput.fill('admin')

  const passwordInput = adminLogin.getByTestId('password-field-password')
  await passwordInput.click()
  await passwordInput.fill('password')

  await adminLogin.getByTestId('login-submit-button').click()
  await adminLogin.waitForURL(URL, { waitUntil: 'domcontentloaded' })

  await adminLogin
    .context()
    .storageState({ path: 'web/tests/storage/adminUser-pw.json' })

  const userLogin = await browser.newPage()
  await userLogin.goto(`${URL}/login`)

  const usersUserInput = userLogin.getByTestId('input-field-username')
  await usersUserInput.click()
  await usersUserInput.fill('user')

  const usersPasswordInput = userLogin.getByTestId('password-field-password')
  await usersPasswordInput.click()
  await usersPasswordInput.fill('password')

  await userLogin.getByTestId('login-submit-button').click()
  await userLogin.waitForURL(URL, { waitUntil: 'domcontentloaded' })

  await userLogin
    .context()
    .storageState({ path: 'web/tests/storage/basicUser-pw.json' })

  await browser.close()
}

export default globalSetup
