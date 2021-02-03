import Input from "@chakra-ui/core/dist/Input";
import {WidgetProps} from "@rjsf/core";
import React from "react";
import PropTypes from "prop-types";

function BaseInput(props: WidgetProps) {
  // Note: since React 15.2.0 we can't forward unknown element attributes, so we
  // exclude the "options" and "schema" ones here.
  if (!props.id) {
    console.log("No id for", props);
    throw new Error(`no id for props ${JSON.stringify(props)}`);
  }
  const {
    value,
    readonly,
    disabled,
    autofocus,
    onBlur,
    onFocus,
    options,
    schema,
    formContext,
    rawErrors,
    ..._inputProps
  } = props;

  const inputProps: any = _inputProps

  // If options.inputType is set use that as the input type
  if (options.inputType) {
    inputProps.type = options.inputType;
  } else if (!inputProps.type) {
    // If the schema is of type number or integer, set the input type to number
    if (schema.type === "number") {
      inputProps.type = "number";
      // Setting step to 'any' fixes a bug in Safari where decimals are not
      // allowed in number inputs
      inputProps.step = "any";
    } else if (schema.type === "integer") {
      inputProps.type = "number";
      // Since this is integer, you always want to step up or down in multiples
      // of 1
      inputProps.step = "1";
    } else {
      inputProps.type = "text";
    }
  }

  if (options.autocomplete) {
    inputProps.autoComplete = options.autocomplete;
  }

  // If multipleOf is defined, use this as the step value. This mainly improves
  // the experience for keyboard users (who can use the up/down KB arrows).
  if (schema.multipleOf) {
    inputProps.step = schema.multipleOf;
  }

  if (typeof schema.minimum !== "undefined") {
    inputProps.min = schema.minimum;
  }

  if (typeof schema.maximum !== "undefined") {
    inputProps.max = schema.maximum;
  }

  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    return props.onChange(value === "" ? options.emptyValue : value);
  };

  return (
    <>
      <Input
        key={inputProps.id}
        className="form-control"
        isReadOnly={readonly}
        isDisabled={disabled}
        autoFocus={autofocus}
        value={value == null ? "" : value}
        {...inputProps}
        list={schema.examples ? `examples_${inputProps.id}` : undefined}
        onChange={_onChange}
        onBlur={
          onBlur && ((event: any) => onBlur(inputProps.id, event.target.value))
        }
        onFocus={
          onFocus &&
          ((event: any) => onFocus(inputProps.id, event.target.value))
        }
      />
      {schema.examples ? (
        <datalist id={`examples_${inputProps.id}`}>
          {Array.from(
            new Set(
                (schema.examples as string[]).concat(schema.default ? [schema.default] as string[] : [] as string[])
            )
          ).map(example => (
            <option key={example as any} value={example as string} />
          ))}
        </datalist>
      ) : null}
    </>
  );
}

BaseInput.defaultProps = {
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false,
};

if (process.env.NODE_ENV !== "production") {
  BaseInput.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
  };
}

export default BaseInput;
