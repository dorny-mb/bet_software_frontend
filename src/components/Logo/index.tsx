import { Center, CenterProps, Image } from '@chakra-ui/react'
import React from 'react'
import { images } from 'theme'

type LogoProps = {} & CenterProps

const Logo: React.FC<LogoProps> = ({ ...rest }) => {
  return (
    <Center
      position="relative"
      _after={{
        content: '""',
        zIndex: 1,
        bg: 'brand.50',
        position: 'absolute',
        bottom: 0,
        left: 0,
        borderRadius: '1rem 0 1rem 0',
        width: '100%',
        height: '50%'
      }}
      w="100%"
      bg="brand.100"
      borderRadius="0 1rem 1rem 0"
      minH={24}
      {...rest}
    >
      <Image zIndex={2} h="35%" src={images.logo} />
    </Center>
  )
}

export default Logo
