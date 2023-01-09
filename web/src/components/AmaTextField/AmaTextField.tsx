import { forwardRef } from 'react'

import {
  FieldError,
  useErrorStyles,
  useRegister,
  RegisterOptions,
} from '@redwoodjs/forms'

export interface AmaTextFieldProps {
  autoComplete?: string
  className?: string
  defaultValue?: string
  label: string
  name: string
  placeholder?: string
  type?: 'text' | 'tel' | 'url' | 'password' | 'email'
  required?: boolean
  tabIndex?: number
  validation?: RegisterOptions
}

const AmaTextField = forwardRef((props: AmaTextFieldProps, ref: any) => {
  const {
    autoComplete,
    className,
    defaultValue = '',
    label,
    name,
    placeholder = '',
    type = 'text',
    required = false,
    tabIndex,
    validation,
  } = props

  const register = useRegister({
    name,
    validation: { ...validation, required },
  })

  const { className: labelClassName, style: labelStyle } = useErrorStyles({
    className: ``,
    errorClassName: `rw-label rw-label-error`,
    name,
  })

  const { className: inputClassName, style: inputStyle } = useErrorStyles({
    className: ``,
    errorClassName: `rw-input rw-input-error`,
    name,
  })

  return (
    <div className="field">
      <label
        htmlFor={`input-${name}`}
        className={labelClassName}
        style={labelStyle}
      >
        {label}
      </label>
      <div className={`input-wrapper ${className}`} data-testid="inputWrapper">
        <input
          {...register}
          autoComplete={autoComplete}
          className={inputClassName}
          data-testid="input"
          defaultValue={defaultValue}
          style={inputStyle}
          type={type}
          id={`input-${name}`}
          name={name}
          placeholder={placeholder}
          ref={ref}
          tabIndex={tabIndex}
        />
      </div>
      <FieldError name={name} className="rw-field-error" />
    </div>
  )
})

export { AmaTextField }
