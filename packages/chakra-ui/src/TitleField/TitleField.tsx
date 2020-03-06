import React from 'react';

import { FieldProps } from 'react-jsonschema-form';

import { Box } from '@chakra-ui/core'
import { Divider } from '@chakra-ui/core'
import { Typography } from '@chakra-ui/core'

const TitleField = ({ title }: FieldProps) => (
  <>
    <Box mb={1} mt={1}>
      <Typography variant="h5">{title}</Typography>
      <Divider />
    </Box>
  </>
);

export default TitleField;
