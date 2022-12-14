import { test, expect } from '@playwright/test'

import { MockUserEntity } from './entities/user.entity'

test.beforeAll(async () => {
  await MockUserEntity.upsert({
    email: 'snap@crackle2.pop',
    resetToken: 'waffleCrisp',
    resetTokenExpiresAt: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    verifyToken: 'cheerios',
    username: 'Captain Crunch Dos',
  })
})

test.describe('reset password', () => {
  test('user should fill out new password input', async ({ page }) => {
    await page.goto('/reset-password?resetToken=waffleCrisp')
    await page.locator('input[name="password"]').fill('password')
    await page.getByText('Submit').click()
    await page.waitForURL('/login')
    const toastMessage = page.getByText('Password changed!')
    expect(toastMessage)
  })
})
