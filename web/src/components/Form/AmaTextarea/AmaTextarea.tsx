// Reference for growing Textarea; https://medium.com/@lucasalgus/creating-a-custom-auto-resize-textarea-component-for-your-react-web-application-6959c0ad68bc

import { useEffect, useRef, useState } from 'react'

import {
  FieldError,
  useErrorStyles,
  RegisterOptions,
  TextAreaField,
} from '@redwoodjs/forms'

export interface AmaTextareaProps {
  className?: string
  cols?: number
  defaultValue?: string
  label: string
  name: string
  placeholder?: string
  type?: 'text' | 'tel' | 'url' | 'password' | 'email'
  required?: boolean
  rows?: number
  validation?: RegisterOptions
}

const AmaTextarea = (props: AmaTextareaProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>()
  const [text, setText] = useState<string>()
  const [parentHeight, setParentHeight] = useState<string>('auto')
  const [textAreaHeight, setTextAreaHeight] = useState('auto')

  const {
    className,
    cols = 2,
    defaultValue = '',
    label,
    name,
    placeholder = '',
    required = false,
    rows = 2,
    validation,
  } = props

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

  useEffect(() => {
    setParentHeight(`${textAreaRef.current.scrollHeight}px`)
    setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`)
  }, [text])

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight('auto')
    setParentHeight(`${textAreaRef.current.scrollHeight}px`)
    setText(event.target.value)
  }

  return (
    <div className="field" data-testid="textareaField">
      <label
        htmlFor={`input-${name}`}
        className={labelClassName}
        style={labelStyle}
      >
        {label}
      </label>
      <div style={{ height: textAreaHeight }}>
        <div
          className={`input-wrapper ${className}`}
          data-testid="inputWrapper"
          style={{ height: parentHeight }}
        >
          <TextAreaField
            name={name}
            cols={cols}
            placeholder={placeholder}
            className={inputClassName}
            data-testid="textarea"
            defaultValue={defaultValue}
            id={`input-${name}`}
            required={required}
            rows={rows}
            validation={validation}
            ref={textAreaRef}
            style={{ ...inputStyle, height: textAreaHeight }}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <FieldError name={name} className="rw-field-error" />
    </div>
  )
}

export { AmaTextarea }
