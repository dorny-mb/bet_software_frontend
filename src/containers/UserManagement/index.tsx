import { Center, Container, Spinner } from '@chakra-ui/react'
import UsersList from 'components/Users/UsersList'

import get from 'lodash/get'
import React from 'react'

import { EmptyListHandler } from '../../components'

import { UsersPermissionsUser, useUsersQuery } from '../../generated/graphql'
import { PageWrap } from '../../layouts'

type UserManagementProps = {}

const UserManagement: React.FC<UserManagementProps> = () => {
  const { data, loading: usersLoading } = useUsersQuery({
    variables: { start: 0, limit: 20 },
    notifyOnNetworkStatusChange: true
  })

  const users = get(data, 'users', []) as UsersPermissionsUser[]

  return (
    <PageWrap title="User Management" p={4} flexDir="column">
      <Container position="relative" px={0} minH="96vh" maxW="container.md">
        {usersLoading ? (
          <Spinner />
        ) : users && users.length > 0 ? (
          <UsersList users={users} />
        ) : (
          <Center zIndex={0} position="relative" top={0} left={0} width="100%" minH="79%">
            <EmptyListHandler title="There is nothing here" />
          </Center>
        )}
      </Container>
    </PageWrap>
  )
}

export default UserManagement
