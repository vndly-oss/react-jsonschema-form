import Radio from "@chakra-ui/core/dist/Radio";
import RadioGroup from "@chakra-ui/core/dist/RadioGroup";

import { WidgetProps } from "@rjsf/core";
import React from "react";

const RadioWidget = ({
  id,
  schema,
  options,
  value,
  disabled,
  readonly,
  onChange,
  onBlur,
  onFocus,
}: WidgetProps) => {
  // Generating a unique field name to identify this set of radio buttons
  const name = Math.random().toString();
  const { enumOptions, enumDisabled } = options;

  const _onChange = ({}, value: any) =>
    onChange(schema.type == "boolean" ? value !== "false" : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  const inline = !!options.inline;

  return (
    <RadioGroup
      name={name}
      value={`${value}`}
      isInline={inline}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}>
      {(enumOptions as any).map((option: any, i: number) => {
        const itemDisabled =
          enumDisabled && (enumDisabled as any).indexOf(option.value) != -1;

        return (
          <Radio
            value={`${option.value}`}
            key={i}
            isDisabled={disabled || itemDisabled || readonly}>
            {option.label}
          </Radio>
        );
      })}
    </RadioGroup>
  );
};

export default RadioWidget;
