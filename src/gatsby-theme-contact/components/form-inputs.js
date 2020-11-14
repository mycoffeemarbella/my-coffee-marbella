import React from 'react'
import { Textarea, Input, Label } from 'theme-ui'

const LabeledInput = ({ as = Input, label, ...props }) => {
  const name = label.toLowerCase()
  const Component = as
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Component name={name} id={name} {...props} />
    </>
  )
}

const FormInput = ({ ...props }) => (
  <>
    <LabeledInput
      label='Tu Nombre'
      type='text'
      required
      placeholder='Introduce tu nombre'
      {...props}
    />
    <LabeledInput
      label='Email'
      type='email'
      required
      placeholder='Introduce tu email'
      {...props}
    />
    <LabeledInput
      label='Tu Mensaje'
      as={Textarea}
      required
      minLength={10}
      rows={5}
      placeholder='Déjanos tu mensaje :)'
      {...props}
    />
  </>
)

export default FormInput
