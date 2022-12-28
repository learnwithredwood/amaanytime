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
import { QuestionTop } from 'src/components/ImageComponents/QuestionTop/QuestionTop'
import { QuestionTopRight } from 'src/components/ImageComponents/QuestionTopRight/QuestionTopRight'
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
      <main
        className="col relative items-center gap-4 px-5"
        data-testid="login-page"
      >
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div>
          <div className="flex-start col flex gap-1.5 p-10">
            <AMAanytime />
            <QuestionTop />
          </div>
          <QuestionTopRight />
        </div>
        <QuestionBubbleRight />
        <QuestionBubbleLeft />
        <BlueStar />

        <div className="isolate gap-10 border-2 border-black">
          <h1 className="relative -left-6 -mt-4 inline-block flex flex-row items-start justify-center gap-2 bg-bg font-condensed text-7xl uppercase text-eternity">
            Sign In
          </h1>
          <Form onSubmit={onSubmit} className="items-start gap-8 px-4">
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

            <TextField name="username" ref={usernameRef} />

            <div className="forgot-link absolute right-8">
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

            <div className="gap-5	">
              <Submit className="g-4 h-12 w-80 cursor-pointer items-center rounded-3xl bg-punch font-slab uppercase text-white hover:bg-veridianGreen">
                Login
              </Submit>
              <div className="text-center text-base">
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

        <div className="col-span-4 col-start-5 pt-12 text-center">
          <h2 className="mb-1 font-slab text-base font-extrabold uppercase">
            Explore the Site
          </h2>
          <SearchInput className="mx-auto" />
          <OrangeStar className="w-6.2 h-11.1" />
          <OrangeStar className="h-8 w-5" />
        </div>
      </main>
      <div className="col-span-6 col-start-4">
        <Footer />
      </div>
    </>
  )
}

export default LoginPage
