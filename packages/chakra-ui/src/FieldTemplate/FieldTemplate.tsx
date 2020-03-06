import React from 'react';

import { FieldTemplateProps } from 'react-jsonschema-form';

import { FormControl } from '@chakra-ui/core'
import { FormHelperText } from '@chakra-ui/core'
import { List } from '@chakra-ui/core'
import { ListItem } from '@chakra-ui/core'
import { Typography } from '@chakra-ui/core'

const FieldTemplate = ({
  id,
  children,
  displayLabel,
  rawErrors = [],
  rawHelp,
  rawDescription,
}: FieldTemplateProps) => {
  return (
    <FormControl fullWidth={true} error={rawErrors.length ? true : false}>
      {children}
      {displayLabel && rawDescription ? (
        <Typography variant="caption" color="textSecondary">
          {rawDescription}
        </Typography>
      ) : null}
      {rawErrors.length > 0 && (
        <List dense={true}>
          {rawErrors.map((error, i: number) => {
            return (
              <ListItem key={i}>
                <FormHelperText id={id}>- {error}</FormHelperText>
              </ListItem>
            );
          })}
        </List>
      )}
      {rawHelp && <FormHelperText id={id}>{rawHelp}</FormHelperText>}
    </FormControl>
  );
};

export default FieldTemplate;
