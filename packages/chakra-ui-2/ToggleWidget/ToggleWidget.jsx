import { Switch } from '@chakra-ui/react'
import React from 'react'

const ToggleWidget = ({ value, readonly, disabled, onChange, id }) => {
  const _onChange = ({ target: { checked } }) => onChange(checked)

  return (
    <Switch
      id={id}
      isChecked={typeof value === 'undefined' ? false : value}
      isDisabled={disabled || readonly}
      onChange={_onChange}
    />
  )
}

export default ToggleWidget
