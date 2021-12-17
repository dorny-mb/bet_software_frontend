import { Button, ButtonProps } from '@chakra-ui/react'

import React from 'react'

type Button2Props = {} & ButtonProps

const Button2: React.FC<Button2Props> = ({ children, ...rest }) => {
  return (
    <Button type="submit" fontSize="xs" rounded="full" colorScheme="gray" {...rest}>
      {children}
    </Button>
  )
}

export default Button2
