import { test, expect } from '@playwright/test'

test.describe('forgot password', () => {
  test('should fill out forgot password input', async ({ page }) => {
    await page.goto('/forgot-password')

    const forgotPasswordTitle = page.getByTestId('forgot-password-heading')
    await expect(forgotPasswordTitle).toBeVisible()
    await expect(forgotPasswordTitle).toHaveText('Forgot Password')

    const usernameInput = page.getByTestId('forgot-password-username')
    await usernameInput.click()
    await usernameInput.fill('admin')

    await page.getByTestId('forgot-password-submit').click()
    await page.waitForURL('/login')

    const toastMessage = page.getByText(
      'A link to reset your password was sent to admin@example.com'
    )
    expect(toastMessage)
  })
})
