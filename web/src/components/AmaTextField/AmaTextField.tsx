import {
  FieldError,
  InputField,
  InputFieldProps,
  Label,
  LabelProps,
  PasswordField,
} from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'

export interface IInputProps {
  type?: InputTypes
  inputProps?: InputFieldProps
  labelProps?: LabelProps
  name: string
  label?: string
  value?: string
  required?: boolean
  tabIndex?: number
  placeholder?: string
}

export enum InputTypes {
  TEXT,
  PASSWORD,
}

const INPUT_CLASSES =
  'z-0 relative left-1 top-1 border border-neutral-800 bg-transparent p-1.5 text-xs w-full md:p-2 md:w-full'

export function AmaTextField(props: IInputProps) {
  return (
    <div className="mx-5">
      {props.label && <AmaLabel {...props} />}
      <div className="bg-white">
        {props.type === InputTypes.PASSWORD ? (
          <PasswordInput {...props} />
        ) : (
          <TextInput {...props} />
        )}
      </div>
      <FieldError name={props.name} className="rw-field-error" />
    </div>
  )
}

const AmaLabel = (props: IInputProps) => {
  return (
    <>
      {props.type === InputTypes.PASSWORD ? (
        <ForgotPasswordLabel {...props} />
      ) : (
        <DefaultLabel {...props} />
      )}
    </>
  )
}

const DefaultLabel = (props: IInputProps) => (
  <Label
    data-testid={`input-label-${props.name}`}
    name={props.label}
    className="m-0 p-0 text-xs"
    {...props.labelProps}
  />
)

function TextInput(props: IInputProps) {
  return (
    <InputField
      data-testid={`input-field-${props.name}`}
      className={INPUT_CLASSES}
      errorClassName="border-red-500"
      name={props.name}
      value={props.value}
      validation={{
        required: {
          value: props.required,
          message: `${props.name} is required!`,
        },
      }}
      placeholder={props.placeholder || ''}
      tabIndex={props.tabIndex}
      {...props.inputProps}
    />
  )
}

const ForgotPasswordLabel = (props: IInputProps) => {
  return (
    <div
      data-testid={`password-label-${props.name}`}
      className="align-center flex justify-between"
    >
      <DefaultLabel {...props} />
      <Link
        to={routes.forgotPassword()}
        className="text-xs underline hover:no-underline"
      >
        Forgot password?
      </Link>
    </div>
  )
}

function PasswordInput(props: IInputProps) {
  return (
    <PasswordField
      data-testid={`password-input-${props.name}`}
      className={INPUT_CLASSES}
      errorClassName="border-red-500"
      name={props.name}
      validation={{
        required: {
          value: props.required,
          message: `${props.name} is required!`,
        },
      }}
      placeholder={props.placeholder || ''}
      tabIndex={props.tabIndex}
      {...props.inputProps}
    />
  )
}
