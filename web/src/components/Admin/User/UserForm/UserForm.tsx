import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
  SelectField,
} from '@redwoodjs/forms'

const UserForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.user?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.user?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="nickname"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Nickname
        </Label>

        <TextField
          name="nickname"
          defaultValue={props.user?.nickname}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="nickname" className="rw-field-error" />

        <Label
          name="pronouns"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pronouns
        </Label>

        <TextField
          name="pronouns"
          defaultValue={props.user?.pronouns}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="pronouns" className="rw-field-error" />

        <Label
          name="active"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Active
        </Label>

        <CheckboxField
          name="active"
          defaultChecked={props.user?.active}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="active" className="rw-field-error" />

        <Label
          name="admin"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Admin
        </Label>

        <CheckboxField
          name="admin"
          defaultChecked={props.user?.admin}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="admin" className="rw-field-error" />

        <Label
          name="teamIds"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Team
        </Label>

        <SelectField
          name="teamIds"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          multiple={true}
        >
          {props.teams?.map((team) => (
            <option
              key={team.id}
              value={team.id}
              selected={props.user?.memberships?.some(
                (membership) => membership.teamId == team.id
              )}
            >
              {team.name}
            </option>
          ))}
        </SelectField>

        <FieldError name="teamIds" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm