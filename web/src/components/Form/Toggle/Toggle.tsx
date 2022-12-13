import { CheckboxField } from '@redwoodjs/forms'

const Toggle = ({ name, checked, value }) => {
  return (
    <div className="toggle">
      <CheckboxField
        name={name}
        id={`${name}-${value}`}
        defaultChecked={checked}
        defaultValue={value}
      />
      <label htmlFor={`${name}-${value}`}>
        <div className="no">No</div>
        <div className="circle block h-8 w-8 rounded-full border-gray bg-white" />
        <div className="yes">Yes</div>
      </label>
    </div>
  )
}

export { Toggle }
