import { useAuth } from '@redwoodjs/auth'
import { Form, Submit } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'

import { AmaTextField, InputTypes } from '../../components/AmaTextField'

export function LoginForm() {
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
    <div className="ml-5 flex items-center">
      <div className="flex w-9/12 flex-col gap-3">
        <Form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
          <AmaTextField name="username" label="username" />
          <AmaTextField
            name="password"
            label="password"
            type={InputTypes.PASSWORD}
          />
          <div className="flex items-center justify-between">
            <div className="text-xs">
              Don&apos;t have an account?{' '}
              <Link className="ml-1 font-bold" to={routes.signup()}>
                Sign up
              </Link>
            </div>
            <Submit className="text-xs w-20 rounded-2xl bg-punch p-1 font-slab text-white">
              LOG IN
            </Submit>
          </div>
        </Form>
      </div>
    </div>
  )
}
