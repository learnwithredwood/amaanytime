import { test, expect } from '@playwright/test'

test.describe('login as a user', () => {
  test('should login user', async ({ page }) => {
    await page.goto('/login')

    const userNameInput = page.getByTestId('input-field-username')
    await userNameInput.click()
    await userNameInput.fill('user')

    const passwordInput = page.getByTestId('password-field-password')
    await passwordInput.click()
    await passwordInput.fill('password')

    await page.getByTestId('login-submit-button').click()
    await expect(page).toHaveURL('/')

    await page.getByRole('button', { name: 'Logout' }).click()
    const loginLink = page.getByRole('link', { name: 'Login' })
    await expect(loginLink).toBeVisible()
  })
})
