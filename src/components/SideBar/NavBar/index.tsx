import { Box, Divider, StackProps, useColorMode, VStack } from '@chakra-ui/react'
import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

import { Logo, UserButton } from 'components'
import { useHistory } from 'react-router-dom'
import { useAuthContext } from 'context/AuthProvider'

type NavBarProps = {} & StackProps

const NavBar: React.FC<NavBarProps> = ({ ...rest }) => {
  const { toggleColorMode, colorMode } = useColorMode()
  const history = useHistory()
  const { isAuthenticated } = useAuthContext()
  return (
    <VStack
      w={28}
      zIndex={1410}
      justifyContent="space-between"
      borderRadius="0 1rem 1rem 0"
      {...rest}
    >
      <Logo cursor="pointer" onClick={() => history.push('/')} />
      <VStack spacing={6} width="100%" py={6}>
        <Box color="gray.400" cursor="pointer" onClick={toggleColorMode}>
          {colorMode === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
        </Box>

        {isAuthenticated && (
          <>
            <Divider borderColor="gray.600" />
            <Box>
              <UserButton />
            </Box>
          </>
        )}
      </VStack>
    </VStack>
  )
}

export default NavBar
