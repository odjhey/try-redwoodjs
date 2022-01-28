import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const CoreAttachmentForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.coreAttachment?.id)
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
          name="targetModel"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Target model
        </Label>
        <TextField
          name="targetModel"
          defaultValue={props.coreAttachment?.targetModel}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="targetModel" className="rw-field-error" />

        <Label
          name="unitId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Unit id
        </Label>
        <NumberField
          name="unitId"
          defaultValue={props.coreAttachment?.unitId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="unitId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CoreAttachmentForm
