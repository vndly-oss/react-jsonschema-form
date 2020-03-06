import React from 'react';

import { Checkbox } from '@chakra-ui/core'
import { FormControl } from '@chakra-ui/core'
import { FormControlLabel } from '@chakra-ui/core'

import { WidgetProps } from 'react-jsonschema-form';

const CheckboxWidget = (props: WidgetProps) => {
  const {
    id,
    value,
    required,
    disabled,
    readonly,
    label,
    autofocus,
    onChange,
    onBlur,
    onFocus,
  } = props;

  const _onChange = ({}, checked: boolean) => onChange(checked);
  const _onBlur = ({
    target: { value },
  }: React.FocusEvent<HTMLButtonElement>) => onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLButtonElement>) => onFocus(id, value);

  return (
    <FormControl fullWidth={true} required={required}>
      <FormControlLabel
        control={
          <Checkbox
            id={id}
            checked={typeof value === 'undefined' ? false : value}
            required={required}
            disabled={disabled || readonly}
            autoFocus={autofocus}
            onChange={_onChange}
            onBlur={_onBlur}
            onFocus={_onFocus}
          />
        }
        label={label}
      />
    </FormControl>
  );
};

export default CheckboxWidget;
