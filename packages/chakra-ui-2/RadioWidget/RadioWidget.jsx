import Radio from '@chakra-ui/core/dist/Radio'
import RadioGroup from '@chakra-ui/core/dist/RadioGroup'
import FormControl from '@chakra-ui/core/dist/FormControl'
import React from 'react'

const RadioWidget = ({ id, schema, options, value, disabled, required, readonly, onChange, onBlur, onFocus }) => {
  // Generating a unique field name to identify this set of radio buttons
  const name = Math.random().toString()
  const { enumOptions, enumDisabled } = options

  // eslint-disable-next-line no-empty-pattern
  const _onChange = ({}, value) => onChange(schema.type === 'boolean' ? value !== 'false' : value)
  const _onBlur = ({ target: { value } }) => onBlur(id, value)
  const _onFocus = ({ target: { value } }) => onFocus(id, value)

  const inline = !!options.inline

  return (
    <FormControl required={required}>
      <RadioGroup
        name={name}
        value={`${value}`}
        isInline={inline}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}>
        {enumOptions.map((option, i) => {
          const itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) !== -1

          return (
            // eslint-disable-next-line react/no-array-index-key
            <Radio value={`${option.value}`} key={i} isDisabled={disabled || itemDisabled || readonly}>
              {option.label}
            </Radio>
          )
        })}
      </RadioGroup>
    </FormControl>
  )
}

export default RadioWidget
