import React from 'react'

import Box from '@chakra-ui/core/dist/Box'
import Divider from '@chakra-ui/core/dist/Divider'
import Heading from '@chakra-ui/core/dist/Heading'

const TitleField = ({ title }) => (
  <Box mb={1} mt={1}>
    <Heading as="h5" size="md">
      {title}
    </Heading>
    <Divider />
  </Box>
)

export default TitleField
