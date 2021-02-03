import React from 'react'
import { Box, Divider, Heading } from '@chakra-ui/react'

const TitleField = ({ title }) => (
  <Box mb={1} mt={1}>
    <Heading as="h5" size="md">
      {title}
    </Heading>
    <Divider />
  </Box>
)

export default TitleField
