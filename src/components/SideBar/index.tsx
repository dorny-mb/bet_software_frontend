import { Flex, FlexProps, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import NavBar from './NavBar'

type SideBarProps = {
  borderColor?: string
  tooltipBg?: string
  tooltipColor?: string
} & FlexProps

const SideBar: React.FC<SideBarProps> = ({ children, bg, ...rest }) => {
  const globalBg = useColorModeValue('gray.100', 'brand.900')
  return (
    <Flex h="100vh" bg={globalBg} {...rest}>
      <NavBar bg={bg} />
      <Flex direction="column" justify="flex-start" overflowY="auto" width="100%">
        {children}
      </Flex>
    </Flex>
  )
}
SideBar.defaultProps = {
  w: '100%',
  bg: 'brand.200'
}
export default SideBar
