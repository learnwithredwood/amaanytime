import { useEffect } from 'react'

import { AMAanytime } from 'web/src/components/ImageComponents/AMAanytime/AMAanytime'

import { useAuth } from '@redwoodjs/auth'
import { Form, Submit } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'

// import { MetaTags } from '@redwoodjs/web'
// import { Footer } from 'src/components/Footer/Footer'
// import { BlueStar } from 'src/components/ImageComponents/BlueStar/BlueStar'
// import { OrangeStar } from 'src/components/ImageComponents/OrangeStar/OrangeStar'
// import { QuestionBubbleLeft } from 'src/components/ImageComponents/QuestionBubbleLeft/QuestionBubbleLeft'
// import { QuestionBubbleRight } from 'src/components/ImageComponents/QuestionBubbleRight/QuestionBubbleRight'
// import { QuestionMarkBubble } from 'src/components/ImageComponents/QuestionMarkBubble/QuestionMarkBubble'
// import { SearchInput } from 'src/components/SearchInput'

import { SlantedQuestionMark } from 'src/components/ImageComponents/SlantedQuestionMark/SlantedQuestionMark'
import { MainLayout } from 'src/layouts/MainLayout'

import { AmaTextField, InputTypes } from '../../components/AmaTextField'

function LoginForm() {
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
    <div className="flex w-full items-center">
      <div className="ml-10 flex flex-col gap-3">
        <h1 className="font-condensed text-7xl uppercase text-eternity">
          Sign In
        </h1>
        <Form
          style={{
            width: '500px',
          }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
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
            <Submit className="w-20 rounded-2xl bg-punch p-1 font-slab text-xs text-white">
              LOG IN
            </Submit>
          </div>
        </Form>
      </div>
    </div>
  )
}

const LoginPage = () => {
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  return (
    <MainLayout>
      <div className="relative grid grid-cols-1 md:grid-cols-2">
        <div>
          <AMAanytime />
          <div className="fixed inset-x-[calc(43%)] inset-y-9 py-5">
            <SlantedQuestionMark />
          </div>
        </div>
        <LoginForm />
      </div>
    </MainLayout>
  )

  // return (
  //   <>
  //     <MetaTags title="Login" />
  //     <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
  //     <div className="relative mt-60 border-2 border-black text-center md:mx-auto md:mt-[26rem] md:max-w-xl lg:mt-56 lg:max-w-5xl">
  //       <div className="relative mx-auto -mt-56 max-w-3xl pb-4 md:-mt-96 lg:absolute lg:-left-20 lg:-top-16 lg:mt-0">
  //         <AMAanytime className="mx-auto w-52 md:w-96 lg:absolute lg:-top-16 lg:w-[32rem]" />

  //         <QuestionMarkBubble className="absolute right-1 -bottom-20 w-20 md:-right-16 md:-bottom-16 md:w-40 lg:-right-[64rem] lg:-top-28" />
  //         <QuestionBubbleRight className="absolute hidden lg:-right-[78rem] lg:-top-4 lg:block lg:w-60" />
  //         <QuestionBubbleLeft className="absolute hidden lg:-left-44 lg:-top-8 lg:block lg:w-80" />
  //       </div>

  //       <BlueStar className="absolute -top-10 left-1 w-12 md:left-10 md:-top-52 md:w-10 lg:top-80 lg:left-80" />

  //       <Form
  //         onSubmit={onSubmit}
  //         className="px-5 pb-5 text-left md:px-10 lg:ml-auto lg:max-w-lg lg:pt-16"
  //       >
  //         <AmaTextField name="username" label="username" required={true} />

  //         <AmaTextField name="password" label="Password" required={true} />

  //       </Form>
  //     </div>

  //     <div className="relative mx-auto mt-6 mb-20 max-w-sm text-center">
  //       <h2 className="mb-2 font-slab text-base font-extrabold uppercase">
  //         Explore the Site
  //       </h2>
  //       <SearchInput className="mx-auto" />
  //       <OrangeStar className="absolute right-1 bottom-14 w-8" />
  //       <OrangeStar className="absolute -bottom-6 w-5" />
  //     </div>
  //     <Footer />
  //   </>
  // )
}

export default LoginPage
