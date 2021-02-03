import { Text } from '@chakra-ui/react'
import React from 'react'

const DescriptionField = ({ description }) => {
  if (description) {
    return (
      <Text fontSize="sm" mb={2}>
        {description}
      </Text>
    )
  }

  return null
}

export default DescriptionField
