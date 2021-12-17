import { DarkMode, Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'

type Button4Props = {} & ButtonProps

const Button4: React.FC<Button4Props> = ({ children, ...rest }) => {
  return (
    <DarkMode>
      <Button
        type="submit"
        fontSize="xs"
        rounded="full"
        bg="brand.800"
        _hover={{ bg: 'brand.700' }}
        color="white"
        colorScheme="brand"
        {...rest}
      >
        {children}
      </Button>
    </DarkMode>
  )
}

export default Button4
