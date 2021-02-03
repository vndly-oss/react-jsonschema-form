import Checkbox from "@chakra-ui/core/dist/Checkbox";
import {WidgetProps} from "@rjsf/core";
import React from "react";

const CheckboxWidget = (props: WidgetProps) => {
  const {
    id,
    value,
    disabled,
    readonly,
    label,
    onChange,
    onBlur,
    onFocus,
  } = props;

  const _onChange = ({ target: { checked } }) => onChange(checked);
  const _onBlur = ({
    target: { value },
  }: React.FocusEvent<HTMLButtonElement>) => onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLButtonElement>) => onFocus(id, value);

  return (
    <Checkbox
      id={id}
      isChecked={typeof value === "undefined" ? false : value}
      isDisabled={disabled || readonly}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}>
      {label}
    </Checkbox>
  );
};

export default CheckboxWidget;
