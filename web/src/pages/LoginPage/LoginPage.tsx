import { useEffect, useRef, useState } from 'react'

import { AMAanytime } from 'web/src/components/ImageComponents/AMAanytime/AMAanytime'

import { useAuth } from '@redwoodjs/auth'
import { Form, Submit } from '@redwoodjs/forms'
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
  const [mount, setMount] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>()
  useEffect(() => {
    setMount(true)
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
  if (mount && usernameRef?.current) {
    usernameRef.current.focus()
  }

  return (
    <>
      <MetaTags title="Login" />
      <main
        className="relative mx-5 mt-8 md:mt-10 lg:mx-auto"
        data-testid="login-page"
      >
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="relative mt-60 border-2 border-black text-center md:mx-auto md:mt-[26rem] md:max-w-xl lg:mt-56 lg:max-w-5xl">
          <div className="relative mx-auto -mt-56 max-w-3xl pb-4 md:-mt-96 lg:absolute lg:-left-20 lg:-top-16 lg:mt-0">
            <AMAanytime className="mx-auto w-52 md:w-96 lg:absolute lg:-top-16 lg:w-[32rem]" />
            <SlantedQuestionMark className="absolute top-3 left-2 w-10 md:top-12 md:-left-8 md:w-12 lg:left-96 lg:-top-32 lg:w-8" />
            <QuestionMarkBubble className="absolute right-1 -bottom-20 w-20 md:-right-16 md:-bottom-16 md:w-40 lg:-right-[64rem] lg:-top-28" />
            <QuestionBubbleRight className="absolute hidden lg:-right-[78rem] lg:-top-4 lg:block lg:w-60" />
            <QuestionBubbleLeft className="absolute hidden lg:-left-44 lg:-top-8 lg:block lg:w-80" />
          </div>
          <h1 className="mx-auto -mt-2 inline-block bg-bg p-2 font-condensed text-7xl uppercase text-eternity md:mt-2 lg:absolute lg:-mt-12 lg:px-8">
            Sign In
          </h1>
          <BlueStar className="absolute -top-10 left-1 w-12 md:left-10 md:-top-52 md:w-10 lg:top-80 lg:left-80" />

          <Form
            onSubmit={onSubmit}
            className="px-5 pb-5 text-left md:px-10 lg:ml-auto lg:max-w-lg lg:pt-16"
          >
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

            <div className="md:flex md:flex-row-reverse md:items-center md:justify-between lg:mb-2 lg:items-center lg:justify-between">
              <Submit className="h-12 w-full cursor-pointer rounded-3xl bg-punch font-slab text-base font-bold uppercase text-white hover:bg-veridianGreen md:w-56 lg:h-9 lg:w-28">
                Login
              </Submit>
              <div className="pt-6 text-center text-base md:pt-0">
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

        <div className="relative mx-auto mt-6 mb-20 max-w-sm text-center">
          <h2 className="mb-2 font-slab text-base font-extrabold uppercase">
            Explore the Site
          </h2>
          <SearchInput className="mx-auto" />
          <OrangeStar className="absolute right-1 bottom-14 w-8" />
          <OrangeStar className="absolute -bottom-6 w-5" />
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default LoginPage
