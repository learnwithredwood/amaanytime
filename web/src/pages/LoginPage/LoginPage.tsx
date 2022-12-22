import { useRef } from 'react'
import { useEffect } from 'react'

import { AMAanytime } from 'web/src/components/ImageComponents/AMAanytime/AMAanytime'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { Footer } from 'src/components/Footer/Footer'
import { BlueStar } from 'src/components/ImageComponents/BlueStar/BlueStar'
import { OrangeStar } from 'src/components/ImageComponents/OrangeStar/OrangeStar'
import { QuestionBubbleLeft } from 'src/components/ImageComponents/QuestionBubbleLeft/QuestionBubbleLeft'
import { QuestionBubbleRight } from 'src/components/ImageComponents/QuestionBubbleRight/QuestionBubbleRight'
import { QuestionTop } from 'src/components/ImageComponents/QuestionTop/QuestionTop'
import { QuestionTopRight } from 'src/components/ImageComponents/QuestionTopRight/QuestionTopRight'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      if (response.error === 'User not Verified') {
        navigate(routes.verificationReset({ email: data.email }))
      }
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />
      <main className="grid grid-cols-12 pt-24" data-testid="login-page">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="relative col-span-9 col-start-3 mt-28 mb-5 grid grid-cols-9 border-2 border-black">
          <AMAanytime />
          <QuestionBubbleRight />
          <QuestionBubbleLeft />
          <QuestionTopRight />
          <QuestionTop />
          <BlueStar />
          <OrangeStar />
          <div className=" sm:g-10 sm:flex-end col-span-5 -mt-10 pl-10 pr-12 sm:isolate sm:flex-col ">
            <h1 className="relative -left-6 mb-5 inline-block bg-bg px-6 font-condensed text-7xl uppercase text-eternity">
              Sign In
            </h1>
            <Form onSubmit={onSubmit} className="relative mb-8">
              <Label
                name="username"
                className="field"
                errorClassName="rw-label rw-label-error"
              >
                Username
              </Label>
              <TextField
                name="username"
                className="input-wrapper"
                errorClassName="rw-input rw-input-error"
                ref={usernameRef}
                validation={{
                  required: {
                    value: true,
                    message: 'Username is required',
                  },
                }}
              />

              <FieldError name="username" className="rw-field-error" />

              <div className="forgot-link absolute right-0">
                <Link
                  to={routes.forgotPassword()}
                  className="font-bold underline hover:no-underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Label
                name="password"
                className="field"
                errorClassName="rw-label rw-label-error"
              >
                Password
              </Label>

              <PasswordField
                name="password"
                className="input-wrapper"
                errorClassName="rw-input rw-input-error"
                autoComplete="current-password"
                validation={{
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                }}
              />

              <FieldError name="password" className="rw-field-error" />

              <div className="flex items-center justify-between">
                <div>
                  <span>Don&apos;t have an account?</span>{' '}
                  <Link to={routes.signup()} className="rw-link">
                    Sign up
                  </Link>
                </div>
                <Submit className=" cursor-pointer rounded-3xl bg-punch py-2 px-6 font-slab uppercase text-white hover:bg-veridianGreen">
                  Login
                </Submit>
              </div>
            </Form>
          </div>
        </div>

        <div className="col-span-4 col-start-5 mb-40 text-center">
          <h2 className="mb-1 font-slab text-base font-extrabold uppercase">
            Explore the Site
          </h2>
        </div>
        <div className="col-span-6 col-start-4">
          <Footer />
        </div>
      </main>
    </>
  )
}

export default LoginPage
