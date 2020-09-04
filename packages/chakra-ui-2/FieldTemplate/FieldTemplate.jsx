import FormControl from '@chakra-ui/core/dist/FormControl'
import FormErrorMessage from '@chakra-ui/core/dist/FormErrorMessage'
import FormHelperText from '@chakra-ui/core/dist/FormHelperText'
import React from 'react'
import { WrappedFormLabel } from '~/components/v2/Form'

const FieldTemplate = ({ id, children, label, disabled, readonly, required, rawErrors = [], rawHelp, description }) => (
  <FormControl isDisabled={disabled} isReadOnly={readonly} isRequired={required} isInvalid={!!rawErrors.length}>
    {description}
    <WrappedFormLabel htmlFor={id}>{label}</WrappedFormLabel>
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
