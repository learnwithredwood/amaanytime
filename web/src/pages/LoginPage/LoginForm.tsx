import { useAuth } from '@redwoodjs/auth'
import { Form, Submit } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'

import { useDevice } from 'src/hooks/useDevice'

import { AmaTextField } from '../../components/AmaTextField'

export function LoginForm() {
  const { isMobile } = useDevice()
  const { isAuthenticated, logIn } = useAuth()

  const handleSubmit = async (data) => {
    const { message, error } = await logIn({ ...data })
    if (message) {
      toast(message)
    }

    if (isAuthenticated) {
      toast.success('Welcome back!')
      return
    }

    if (error === 'User not Verified') {
      navigate(routes.verificationReset({ email: data.email }))
      return
    }

    if (error) {
      toast.error(error)
      return
    }
  }
  return (
    <div className="mt-20 flex flex-col items-center justify-center md:m-0 md:items-start">
      <Form
        onSubmit={handleSubmit}
        className="flex w-screen flex-col gap-2 md:w-10/12 md:gap-4"
      >
        {!isMobile && (
          <div
            data-testid="login-button-mobile"
            style={{
              fontSize: '110px',
              margin: '0 0 0 1rem',
              padding: 0,
              lineHeight: '4rem',
            }}
            className="font-condensed"
          >
            LOG IN
          </div>
        )}
        <AmaTextField name="username" label="username" />
        <AmaTextField name="password" label="password" type="password" />
        <div className="m-5 flex items-center justify-between">
          <div className="text-xs">
            Don&apos;t have an account?{' '}
            <Link
              data-testid="login-signup-button"
              className="ml-1 font-bold"
              to={routes.signup()}
            >
              Sign up
            </Link>
          </div>
          <Submit
            data-testid="login-submit-button"
            className="w-1/4 rounded-2xl bg-punch py-2 font-slab text-xs text-white"
          >
            LOG IN
          </Submit>
        </div>
      </Form>
    </div>
  )
}
