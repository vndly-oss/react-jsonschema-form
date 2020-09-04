import Textarea from "@chakra-ui/core/dist/Textarea";
import { WidgetProps } from "@rjsf/core";
import React from "react";

type CustomWidgetProps = WidgetProps & {
  options: any;
};

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
}: CustomWidgetProps) => {
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
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
  );
};

export default TextareaWidget;
