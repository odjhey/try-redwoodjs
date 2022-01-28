import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const ImagesOnCoreAttachmentForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.imagesOnCoreAttachment?.id)
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
          name="attachmentId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Attachment id
        </Label>
        <NumberField
          name="attachmentId"
          defaultValue={props.imagesOnCoreAttachment?.attachmentId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="attachmentId" className="rw-field-error" />

        <Label
          name="imageId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image id
        </Label>
        <NumberField
          name="imageId"
          defaultValue={props.imagesOnCoreAttachment?.imageId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="imageId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ImagesOnCoreAttachmentForm
