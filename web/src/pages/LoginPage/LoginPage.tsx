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
      <main className="items-center px-5" data-testid="login-page">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="col flex p-14">
          <AMAanytime />
          <QuestionTop />
          <QuestionTopRight />
          <QuestionBubbleRight />
          <QuestionBubbleLeft />
          <BlueStar />
        </div>

        <div className="border-2 border-black lg:absolute lg:left-60 lg:top-64 lg:h-96 lg:w-8/12">
          <h1 className="relative left-36 -mt-12 inline-block bg-bg p-2 font-condensed text-7xl uppercase text-eternity md:left-80 lg:left-767">
            Sign In
          </h1>
          <Form
            onSubmit={onSubmit}
            className="items-start px-4 lg:absolute lg:left-767 lg:h-72 lg:w-96"
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

            {/* <div className="g-5"> */}
            <Submit className="g-10 h-12 w-full cursor-pointer rounded-3xl bg-punch font-slab text-base font-bold uppercase text-white hover:bg-veridianGreen">
              Login
            </Submit>
            <div className="pt-6 text-center text-base">
              <span>Don&apos;t have an account?</span>{' '}
              <Link
                to={routes.signup()}
                className="font-bold underline hover:no-underline"
              >
                Sign up
              </Link>
            </div>
            {/* </div> */}
          </Form>
        </div>

        <div className="pt-4 text-center">
          <h2 className="mb-2 font-slab text-base font-extrabold uppercase lg:mb-10">
            Explore the Site
          </h2>
          <SearchInput className="mx-auto" />
        </div>
        <div className="left-96 top-2 h-12 w-6">
          <OrangeStar />
        </div>
        {/* <OrangeStar className="h-8 w-6" /> */}
      </main>
      <div className="lg:mt-">
        <Footer />
      </div>
    </>
  )
}

export default LoginPage
