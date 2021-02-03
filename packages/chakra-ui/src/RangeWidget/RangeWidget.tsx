import Slider, {
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/core/dist/Slider";
import { utils, WidgetProps } from "@rjsf/core";
import React from "react";

const { rangeSpec } = utils;

const RangeWidget = ({
  value,
  readonly,
  disabled,
  onBlur,
  onFocus,
  options,
  schema,
  onChange,
  label,
  id,
}: WidgetProps) => {
  let sliderProps = { value, label, id, ...rangeSpec(schema) };

  const _onChange = (value: number) =>
    onChange(value === undefined ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <Slider
      {...sliderProps}
      isDisabled={disabled || readonly}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}>
      <SliderTrack />
      <SliderFilledTrack />
      <SliderThumb />
    </Slider>
  );
};

export default RangeWidget;
