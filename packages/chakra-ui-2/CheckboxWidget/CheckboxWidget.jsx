import { Checkbox, Box, Text } from '@chakra-ui/react'
import React from 'react'

const CheckboxWidget = props => {
  const { id, value, label, disabled, readonly, onChange, onBlur, onFocus, formContext = {}, options = {} } = props

  const _onChange = ({ target: { checked } }) => onChange(checked)
  const _onBlur = ({ target: { value } }) => onBlur(id, value)
  const _onFocus = ({ target: { value } }) => onFocus(id, value)

  const getDisplayTextFor = () => {
    const truthy = options?.textDisplay?.truthy ?? 'Yes'
    const falsy = options?.textDisplay?.falsy ?? 'No'

    return value ? truthy : falsy
  }

  return formContext?.displayAsText ? (
    <Box>
      <Text as="span" fontSize="md" fontWeight="semibold">
        {label}
      </Text>
      <Text>{getDisplayTextFor(value)}</Text>
    </Box>
  ) : (
    <Checkbox
      displayAsText={formContext?.displayAsText}
      id={id}
      isChecked={typeof value === 'undefined' ? false : value}
      isDisabled={disabled || readonly}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}>
      {label}
    </Checkbox>
  )
}

export default CheckboxWidget
