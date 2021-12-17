import {
  Avatar,
  AvatarBadge,
  Center,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  Text,
  MenuList,
  useColorModeValue
} from '@chakra-ui/react'
import { API_HOST } from '../../constants'
import React from 'react'
import { VscSignOut } from 'react-icons/vsc'

import { useAuthContext } from 'context/AuthProvider'

type indexProps = {}

const index: React.FC<indexProps> = ({}) => {
  const { user, logout } = useAuthContext()

  return (
    <Menu placement="auto">
      <MenuButton borderRadius="50%" _focus={{ boxShadow: 'outline' }}>
        <Center>
          <Avatar src={API_HOST + user?.profilePicture?.url} size="sm" name={user?.username}>
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
        </Center>
      </MenuButton>

      <MenuList
        bg={useColorModeValue('white', 'brand.300')}
        textAlign="left"
        border="none"
        zIndex={474839}
        fontSize="sm"
        p={0}
      >
        <MenuGroup>
          <MenuItem>
            <Center py={2}>
              <Avatar
                src={API_HOST + user?.profilePicture?.url}
                size="md"
                name={user?.username}
                mr={2}
              >
                <AvatarBadge boxSize="1.25em" bg="green.500" />
              </Avatar>
              <Flex direction="column">
                <Heading as="h4" fontSize="xl">
                  {user?.username}
                </Heading>
                <Text fontSize="xs">{user?.email}</Text>
              </Flex>
            </Center>
          </MenuItem>
        </MenuGroup>

        <MenuItem icon={<VscSignOut />} onClick={logout}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default index
