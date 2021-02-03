import { FormControl, FormErrorMessage, FormHelperText } from '@chakra-ui/react'
import React from 'react'
import { WrappedFormLabel } from '~/components/v2/Form'

const FieldTemplate = ({
  id,
  children,
  label,
  disabled,
  displayLabel,
  readonly,
  required,
  rawErrors = [],
  rawHelp,
  description
}) => (
  <FormControl isDisabled={disabled} isReadOnly={readonly} isRequired={required} isInvalid={!!rawErrors.length}>
    {displayLabel && <WrappedFormLabel htmlFor={id}>{label}</WrappedFormLabel>}
    {displayLabel && description}
    {children}
    {rawErrors.length > 0 &&
      rawErrors.map((error, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <FormErrorMessage key={i} id={id}>
          {error}
        </FormErrorMessage>
      ))}
    {rawHelp && <FormHelperText id={id}>{rawHelp}</FormHelperText>}
  </FormControl>
)

export default FieldTemplate
