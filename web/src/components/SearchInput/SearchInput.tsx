import { useForm } from 'react-hook-form'

import { Form, TextField } from '@redwoodjs/forms'

interface ISearchInput {
  className?: string
  understated?: boolean
}

const SearchInput = ({ className, understated = false }: ISearchInput) => {
  const formMethods = useForm()

  const onSubmit = (data) => {
    console.log(data)
    formMethods.reset()
  }

  return (
    <div
      className={`${
        understated ? 'bg-searchUnderstated' : 'bg-search'
      } h-16 max-w-[305px] bg-contain bg-no-repeat ${className}`}
    >
      <Form
        className="flex h-16 items-center gap-1 pl-5 tracking-wide"
        onSubmit={onSubmit}
      >
        <label htmlFor="search" className="font-condensed text-3xl uppercase">
          Search
        </label>
        <div className="flex-1">
          <TextField
            className="w-full border-b-2 border-dotted border-black bg-transparent px-1 text-base font-semibold outline-none"
            name="search"
            id="search"
          />
        </div>
        <button className="relative z-searchButton translate-x-0 transition-transform hover:translate-x-2">
          <img src="/images/btn__search.svg" alt="Arrow" width="32" />
        </button>
      </Form>
    </div>
  )
}

export { SearchInput }
