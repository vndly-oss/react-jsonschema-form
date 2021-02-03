import Box from "@chakra-ui/core/dist/Box";
import Heading from "@chakra-ui/core/dist/Heading";
import List, { ListIcon, ListItem } from "@chakra-ui/core/dist/List";
import { ErrorListProps } from "@rjsf/core";
import React from "react";

const ErrorList = ({ errors }: ErrorListProps) => (
  <Box mb={2} p={2}>
    <Heading as="h6">Errors</Heading>
    <List spacing={2}>
      {errors.map((error, i: number) => {
        return (
          <ListItem key={i}>
            <ListIcon icon="warning-2" />
            {error.stack}
          </ListItem>
        );
      })}
    </List>
  </Box>
);

export default ErrorList;
