import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

type UserListHeaderProps = {
  title: string
}

const UserListHeader: React.FC<UserListHeaderProps> = ({ title }) => {
  return (
    <Flex mb={8}>
      <Heading fontWeight="semibold" fontSize="3xl">
        {title}
      </Heading>
    </Flex>
  )
}

export default UserListHeader
