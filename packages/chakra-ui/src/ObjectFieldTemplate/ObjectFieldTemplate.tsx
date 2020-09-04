import Box from "@chakra-ui/core/dist/Box";
import Stack from "@chakra-ui/core/dist/Stack";
import { ObjectFieldTemplateProps } from "@rjsf/core";
import React from "react";

const ObjectFieldTemplate = ({
  DescriptionField,
  description,
  TitleField,
  title,
  properties,
  required,
  uiSchema,
  idSchema,
}: ObjectFieldTemplateProps) => {
  return (
    <>
      {(uiSchema["ui:title"] || title) && (
        <TitleField
          id={`${idSchema.$id}-title`}
          title={title}
          required={required}
        />
      )}
      {description && (
        <DescriptionField
          id={`${idSchema.$id}-description`}
          description={description}
        />
      )}
      <Stack spacing={2} mt={3}>
        {properties.map((element: any, index: number) => (
          <Box key={index} mb={3}>
            {element.content}
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default ObjectFieldTemplate;
