import { DarkMode, Button, ButtonProps } from '@chakra-ui/react'

import React from 'react'

type Button2Props = {} & ButtonProps

const Button2: React.FC<Button2Props> = ({ children, ...rest }) => {
  return (
    <DarkMode>
      <Button
        type="submit"
        fontSize="xs"
        rounded="full"
        bg="brand.100"
        _hover={{ bg: 'brand.50' }}
        color="white"
        colorScheme="brand"
        {...rest}
      >
        {children}
      </Button>
    </DarkMode>
  )
}

export default Button2
