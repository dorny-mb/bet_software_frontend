import { DarkMode, Button, ButtonProps, Center, Icon } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons'

type Button1Props = { icon: IconType } & ButtonProps

const Button1: React.FC<Button1Props> = ({ children, icon, ...rest }) => {
  return (
    <DarkMode>
      <Button
        mt={4}
        type="submit"
        fontSize="xs"
        rounded="full"
        px={2}
        pr={4}
        bg="brand.100"
        leftIcon={
          <Center p={2} mr={2} rounded="full" bg="white">
            <Icon color="brand.100" as={icon} />
          </Center>
        }
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

export default Button1
