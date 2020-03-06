import React from 'react';

import { AddButtonProps } from 'react-jsonschema-form';

import { Button } from '@chakra-ui/core'
import { Icon } from '@chakra-ui/core'

const AddButton: React.FC<AddButtonProps> = props => (
  <Button {...props}>
    <Icon name="add" /> Add Item
  </Button>
);

export default AddButton;
