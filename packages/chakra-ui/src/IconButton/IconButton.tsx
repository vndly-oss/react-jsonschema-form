import React from 'react';

import { Button } from '@chakra-ui/core'
import { Add } from '@chakra-ui/core'
import { ArrowUpward } from '@chakra-ui/core'
import { ArrowDownward } from '@chakra-ui/core'
import { Remove } from '@chakra-ui/core'
import { IconButtonProps as MuiIconButtonProps } from '@chakra-ui/core/IconButton';

const mappings: any = {
  remove: <Remove />,
  plus: <Add />,
  'arrow-up': <ArrowUpward />,
  'arrow-down': <ArrowDownward />,
};

type IconButtonProps = MuiIconButtonProps & {
  icon: string;
};

const IconButton = (props: IconButtonProps) => {
  const { icon, className, ...otherProps } = props;
  return (
    <Button {...otherProps} size="small">
      {mappings[icon]}
    </Button>
  );
};

export default IconButton;
