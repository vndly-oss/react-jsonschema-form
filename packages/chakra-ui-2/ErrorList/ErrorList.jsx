import { WarningTwoIcon } from '@chakra-ui/icons'
import { Box, Heading, List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react'

const ErrorList = ({ errors }) => (
  <Box mb={2} p={2}>
    <Heading as="h6">Errors</Heading>
    <List spacing={2}>
      {errors.map((error, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <ListItem key={i}>
          <ListIcon as={<WarningTwoIcon />} />
          {error.stack}
        </ListItem>
      ))}
    </List>
  </Box>
)

export default ErrorList
