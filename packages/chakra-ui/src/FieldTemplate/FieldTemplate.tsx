import FormControl from "@chakra-ui/core/dist/FormControl";
import FormErrorMessage from "@chakra-ui/core/dist/FormErrorMessage";
import FormHelperText from "@chakra-ui/core/dist/FormHelperText";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import { FieldTemplateProps } from "@rjsf/core";
import React from "react";

const FieldTemplate = ({
  id,
  children,
  label,
  disabled,
  readonly,
  required,
  rawErrors = [],
  rawHelp,
  description,
}: FieldTemplateProps) => {
  return (
    <FormControl
      isDisabled={disabled}
      isReadOnly={readonly}
      isRequired={required}
      isInvalid={!!rawErrors.length}>
      <FormLabel>{label}</FormLabel>
      {description}
      {children}
      {rawErrors.length > 0 &&
        rawErrors.map((error, i: number) => (
          <FormErrorMessage key={i} id={id}>
            {error}
          </FormErrorMessage>
        ))}
      {rawHelp && <FormHelperText id={id}>{rawHelp}</FormHelperText>}
    </FormControl>
  );
};

export default FieldTemplate;
