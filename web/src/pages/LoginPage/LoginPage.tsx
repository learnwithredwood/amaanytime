import { useRef } from 'react'
import { useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Form, Submit } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { Footer } from 'src/components/Footer'
import { AmaTextField } from 'src/components/Form/AmaTextField'
import { SearchInput } from 'src/components/SearchInput'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>()
  useEffect(() => {
    usernameRef?.current && usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      if (response.error === 'User not Verified') {
        navigate(routes.verificationReset({ email: data.username }))
      }
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />
      <main className="grid grid-cols-12 pt-24">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

        <div className="relative col-span-9 col-start-3 mt-28 mb-5 grid grid-cols-9 border-2 border-black">
          {/* image decorations */}
          <img
            src="/images/questions--left.svg"
            alt="Question Bubbles"
            className="absolute -left-[17rem] -top-[5rem]"
          />
          <img
            src="/images/questions--top.svg"
            alt="Question Bubbles"
            className="absolute -top-[12rem] left-[18rem]"
          />
          <img
            src="/images/questions--right.svg"
            alt="Question Bubbles"
            className="absolute -right-[9.5rem] -top-[5rem]"
          />

          {/* logo */}
          <div className="relative col-span-4">
            <img
              src="/images/logo.svg"
              alt="AMA Anytime"
              className="absolute -top-28 -left-24"
            />
          </div>

          {/* form */}
          <div className="col-span-5 -mt-10 pl-10 pr-12">
            <h1 className="relative -left-6 mb-5 inline-block bg-bg px-6 font-condensed text-7xl uppercase text-eternity">
              Sign In
            </h1>
            <Form onSubmit={onSubmit} className="relative mb-8">
              <AmaTextField
                name="username"
                label="Username"
                ref={usernameRef}
                tabIndex={0}
                validation={{
                  required: {
                    value: true,
                    message: 'Username is required',
                  },
                }}
                required={true}
              />

              <div className="forgot-link absolute right-0">
                <Link
                  className="font-bold underline hover:no-underline"
                  to={routes.forgotPassword()}
                >
                  Forgot password?
                </Link>
              </div>

              <AmaTextField
                autoComplete="current-password"
                name="password"
                label="Password"
                tabIndex={0}
                type="password"
                validation={{
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                }}
                required={true}
              />

              <div className="flex items-center justify-between">
                <div>
                  {/* Don’t have an account?{' '}
                  <Link
                    to={routes.signup()}
                    className="font-bold underline hover:no-underline"
                  >
                    Sign up
                  </Link> */}
                </div>

                <div className="rw-button-group">
                  <Submit className="cursor-pointer rounded-3xl bg-punch py-2 px-6 font-slab uppercase text-white hover:bg-veridianGreen">
                    Login
                  </Submit>
                </div>
              </div>
            </Form>
          </div>
        </div>

        {/* explore the site */}
        <div className="col-span-4 col-start-5 mb-40 text-center">
          <h2 className="mb-1 font-slab text-base font-extrabold uppercase">
            Explore the Site
          </h2>
          <SearchInput className="mx-auto" understated={true} />
        </div>

        {/* footer */}
        <div className="col-span-6 col-start-4">
          <Footer />
        </div>
      </main>
    </>
  )
}

export default LoginPage
