import React from 'react';

import { Box } from '@chakra-ui/core'
import { Typography } from '@chakra-ui/core'
import { List } from '@chakra-ui/core'
import { ListItem } from '@chakra-ui/core'
import { ListItemIcon } from '@chakra-ui/core'
import { ErrorIcon } from '@chakra-ui/core'
import { ListItemText } from '@chakra-ui/core'
import { Paper } from '@chakra-ui/core'

import { ErrorListProps } from 'react-jsonschema-form';

const ErrorList = ({ errors }: ErrorListProps) => (
  <Paper elevation={2}>
    <Box mb={2} p={2}>
      <Typography variant="h6" component="h6">
        Errors
      </Typography>
      <List dense={true}>
        {errors.map((error, i: number) => {
          return (
            <ListItem key={i}>
              <ListItemIcon>
                <ErrorIcon color="error" />
              </ListItemIcon>
              <ListItemText primary={error.stack} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  </Paper>
);

export default ErrorList;
