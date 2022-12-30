import { useRef } from 'react'
import { useEffect } from 'react'

import { AMAanytime } from 'web/src/components/ImageComponents/AMAanytime/AMAanytime'

import { useAuth } from '@redwoodjs/auth'
import { Form, Submit, TextField } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { AmaTextField } from 'src/components/AmaTextField'
import { Footer } from 'src/components/Footer/Footer'
import { BlueStar } from 'src/components/ImageComponents/BlueStar/BlueStar'
import { OrangeStar } from 'src/components/ImageComponents/OrangeStar/OrangeStar'
import { QuestionBubbleLeft } from 'src/components/ImageComponents/QuestionBubbleLeft/QuestionBubbleLeft'
import { QuestionBubbleRight } from 'src/components/ImageComponents/QuestionBubbleRight/QuestionBubbleRight'
import { QuestionMarkBubble } from 'src/components/ImageComponents/QuestionMarkBubble/QuestionMarkBubble'
import { SlantedQuestionMark } from 'src/components/ImageComponents/SlantedQuestionMark/SlantedQuestionMark'
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
      <main className="mx-5 mt-8 md:mt-10" data-testid="login-page">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="relative pb-4">
          <AMAanytime className="mx-auto w-52 md:w-96 lg:left-40 lg:top-40 lg:mx-20 lg:w-96" />
          <SlantedQuestionMark className="absolute top-3 left-2 w-10 md:top-12 md:left-12 md:w-12 lg:top-5 lg:left-96 lg:w-8" />
          <QuestionMarkBubble className="absolute right-1 -bottom-20 w-20 md:right-10 md:-bottom-16 md:w-40 lg:bottom-96 lg:right-40 lg:w-52" />
          <QuestionBubbleRight className="absolute hidden lg:top-48 lg:right-4 lg:block lg:w-60" />
          <QuestionBubbleLeft className="absolute hidden lg:top-36 lg:-left-4 lg:block lg:w-80" />
        </div>

        <div className="relative mt-10 border-2 border-black text-center md:mx-24 md:mt-16 lg:mx-60 lg:mt-0">
          <h1 className="mx-auto -mt-12 inline-block bg-bg p-2 font-condensed text-7xl uppercase text-eternity">
            Sign In
          </h1>
          <BlueStar className="absolute -top-10 left-1 w-12 md:left-10 md:-top-52 md:w-10 lg:top-80 lg:left-60 lg:w-12" />
          <Form onSubmit={onSubmit} className="px-5 pb-5 text-left md:px-10">
            <AmaTextField
              name="username"
              label="Username"
              tabIndex={0}
              ref={usernameRef}
              validation={{
                required: {
                  value: true,
                  message: 'Username is required',
                },
              }}
              required={true}
            />

            <TextField className="hidden" name="username" ref={usernameRef} />

            <div className="forgot-link absolute right-12">
              <Link
                to={routes.forgotPassword()}
                className="font-bold underline hover:no-underline"
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

            <div className="md:flex md:flex-row-reverse md:items-center md:justify-between">
              <Submit className="h-12 w-full cursor-pointer rounded-3xl bg-punch font-slab text-base font-bold uppercase text-white hover:bg-veridianGreen md:w-56">
                Login
              </Submit>
              <div className="pt-6	text-center text-base">
                <span>Don&apos;t have an account?</span>{' '}
                <Link
                  to={routes.signup()}
                  className="font-bold underline hover:no-underline"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </Form>
        </div>

        <div className="relative mt-6 mb-20 text-center">
          <h2 className="mb-2 font-slab text-base font-extrabold uppercase">
            Explore the Site
          </h2>
          <SearchInput className="mx-auto" />
          <OrangeStar className="absolute right-1 bottom-14 w-8 md:right-52 lg:right-96" />
          <OrangeStar className="absolute -bottom-6 w-5 md:left-52 lg:left-96" />
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default LoginPage
