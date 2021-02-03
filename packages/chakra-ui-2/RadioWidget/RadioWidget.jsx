import { FormControl, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { noop } from 'lodash/fp'
import React from 'react'

const RadioWidget = ({
  options,
  value,
  disabled,
  required,
  readonly,
  onChange = noop,
  onBlur = noop,
  onFocus = noop
}) => {
  // Generating a unique field name to identify this set of radio buttons
  const name = Math.random().toString()
  const { enumOptions, enumDisabled } = options
  const inline = !!options.inline

  const normalize = value => {
    return enumOptions.find(opt => String(opt.value) === value).value
  }

  return (
    <FormControl required={required}>
      <RadioGroup
        name={name}
        value={`${value}`}
        onChange={value => {
          onChange(normalize(value))
        }}
        onBlur={onBlur}
        onFocus={onFocus}>
        <Stack direction={inline ? 'row' : 'column'} spacing={inline ? 4 : 2}>
          {enumOptions.map((option, i) => {
            const itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) !== -1

            return (
              // eslint-disable-next-line react/no-array-index-key
              <Radio value={`${option.value}`} key={i} isDisabled={disabled || itemDisabled || readonly}>
                {option.label}
              </Radio>
            )
          })}
        </Stack>
      </RadioGroup>
    </FormControl>
  )
}

export default RadioWidget
