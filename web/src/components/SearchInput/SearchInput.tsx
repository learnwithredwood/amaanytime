import { useForm } from 'react-hook-form'

import { Form, TextField } from '@redwoodjs/forms'

import { SearchArrow } from '../ImageComponents/SearchArrow/SearchArrow'

interface ISearchInput {
  className?: string
}

const SearchInput = ({ className }: ISearchInput) => {
  const formMethods = useForm()

  const onSubmit = (data) => {
    console.log(data)
    formMethods.reset()
  }

  return (
    <div className={`h-16 max-w-[305px] bg-search bg-no-repeat ${className}`}>
      <Form
        className="flex h-16 items-center pl-5 tracking-wide"
        onSubmit={onSubmit}
      >
        <label
          htmlFor="search"
          className="pb-0 text-center font-condensed text-3xl uppercase"
        >
          Search
        </label>
        <div className="flex-1">
          <button className="absolute bottom-6 right-7 translate-x-0 transition-transform hover:translate-x-2 md:right-60 lg:right-96">
            <SearchArrow className="w-8" />
          </button>
          <TextField
            className="mt-1 w-full border-b-4 border-dotted border-black bg-transparent px-2 text-xl font-semibold outline-none"
            name="search"
            id="search"
          />
        </div>
      </Form>
    </div>
  )
}

export { SearchInput }
