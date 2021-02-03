import React from 'react'
import { IconButton as ChakraIconButton } from '@chakra-ui/react'
import { AddIcon, MinusIcon, ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'

const mappings = {
  remove: MinusIcon,
  plus: AddIcon,
  'arrow-up': ArrowUpIcon,
  'arrow-down': ArrowDownIcon
}

const IconButton = props => {
  const { icon, ...otherProps } = props
  const Icon = mappings[icon]
  return <ChakraIconButton {...otherProps} size="sm" icon={<Icon />} />
}

export default IconButton
