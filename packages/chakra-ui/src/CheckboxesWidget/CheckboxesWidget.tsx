import Checkbox from "@chakra-ui/core/dist/Checkbox";
import CheckboxGroup from "@chakra-ui/core/dist/CheckboxGroup";
import {WidgetProps} from "@rjsf/core";
import React from "react";

const selectValue = (value: any, selected: any, all: any) => {
  const at = all.indexOf(value);
  const updated = selected.slice(0, at).concat(value, selected.slice(at));

  // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order
  return updated.sort((a: any, b: any) => all.indexOf(a) > all.indexOf(b));
};

const deselectValue = (value: any, selected: any) => {
  return selected.filter((v: any) => v !== value);
};

const CheckboxesWidget = ({
  id,
  disabled,
  options,
  value,
  readonly,
  onChange,
  onBlur,
  onFocus,
}: WidgetProps) => {
  const { enumOptions, enumDisabled, inline } = options;

  const _onChange = (option: any) => ({
    target: { checked },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const all = (enumOptions as any).map(({ value }: any) => value);

    if (checked) {
      onChange(selectValue(option.value, value, all));
    } else {
      onChange(deselectValue(option.value, value));
    }
  };

  const _onBlur = ({
    target: { value },
  }: React.FocusEvent<HTMLButtonElement>) => onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLButtonElement>) => onFocus(id, value);

  return (
    <CheckboxGroup isInline={inline as boolean}>
      {(enumOptions as any).map((option: any, index: number) => {
        const checked = value.indexOf(option.value) !== -1;
        const itemDisabled =
          enumDisabled && (enumDisabled as any).indexOf(option.value) != -1;
        return (
          <Checkbox
            id={`${id}_${index}`}
            value={option.value}
            isChecked={checked}
            isDisabled={disabled || itemDisabled || readonly}
            onChange={_onChange(option)}
            onBlur={_onBlur}
            onFocus={_onFocus}>
            {option.label}
          </Checkbox>
        );
      })}
    </CheckboxGroup>
  );
};

export default CheckboxesWidget;
