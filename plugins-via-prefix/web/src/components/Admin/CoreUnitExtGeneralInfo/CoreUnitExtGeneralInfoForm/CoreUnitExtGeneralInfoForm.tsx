import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const CoreUnitExtGeneralInfoForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.coreUnitExtGeneralInfo?.id)
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
          name="unitId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Unit id
        </Label>
        <NumberField
          name="unitId"
          defaultValue={props.coreUnitExtGeneralInfo?.unitId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="unitId" className="rw-field-error" />

        <Label
          name="model"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Model
        </Label>
        <TextField
          name="model"
          defaultValue={props.coreUnitExtGeneralInfo?.model}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="model" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>
        <TextField
          name="description"
          defaultValue={props.coreUnitExtGeneralInfo?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="description" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CoreUnitExtGeneralInfoForm
