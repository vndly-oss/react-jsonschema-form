import { AddIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import React from 'react'

const AddButton = props => (
  <Button variant="outline" leftIcon={<AddIcon />} {...props}>
    Add Item
  </Button>
)

export default AddButton
