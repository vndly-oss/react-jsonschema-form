import Text from "@chakra-ui/core/dist/Text";
import { FieldProps } from "@rjsf/core";
import React from "react";

const DescriptionField = ({ description }: FieldProps) => {
  if (description) {
    return (
      <Text fontSize="sm" mb={2}>
        {description}
      </Text>
    );
  }

  return null;
};

export default DescriptionField;
