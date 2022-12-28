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
        className="flex h-16 items-center gap-1 pl-5 tracking-wide"
        onSubmit={onSubmit}
      >
        <label htmlFor="search" className="font-condensed text-3xl uppercase">
          Search
        </label>
        <div className="flex-1">
          <TextField
            className="w-full border-b-4 border-dotted border-black bg-transparent px-1 text-base font-semibold outline-none"
            name="search"
            id="search"
          />
          <button className="relative z-searchButton translate-x-0 transition-transform hover:translate-x-2">
            <SearchArrow />
          </button>
        </div>
      </Form>
    </div>
  )
}

export { SearchInput }