import { DarkMode, Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'

type Button5Props = {} & ButtonProps

const Button5: React.FC<Button5Props> = ({ children, ...rest }) => {
  return (
    <DarkMode>
      <Button
        type="submit"
        fontSize="xs"
        rounded="full"
        bg="brand.400"
        color="brand.200"
        _hover={{ bg: 'brand.500' }}
        colorScheme="brand"
        {...rest}
      >
        {children}
      </Button>
    </DarkMode>
  )
}

export default Button5
