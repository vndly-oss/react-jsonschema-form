import { Textarea, Text } from '@chakra-ui/react'
import React from 'react'
import { newLineToBrFormatter } from '~/common/reactStringUtils'

const TextareaWidget = ({
  id,
  placeholder,
  value,
  disabled,
  autofocus,
  readonly,
  onBlur,
  onFocus,
  onChange,
  options,
  formContext
}) => {
  const _onChange = ({ target: { value } }) => onChange(value === '' ? options.emptyValue : value)
  const _onBlur = ({ target: { value } }) => onBlur(id, value)
  const _onFocus = ({ target: { value } }) => onFocus(id, value)

  return formContext?.displayAsText ? (
    <Text>{newLineToBrFormatter(value)}</Text>
  ) : (
    <Textarea
      id={id}
      value={value}
      placeholder={placeholder}
      isDisabled={disabled}
      isReadOnly={readonly}
      autoFocus={autofocus}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
    />
  )
}

export default TextareaWidget
