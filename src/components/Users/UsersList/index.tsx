import { List } from '@chakra-ui/react'
import { UsersPermissionsUser } from 'generated/graphql'
import React from 'react'
import { UserListHeader } from '..'
import UserListItem from './UserListItem'

type UsersListProps = {
  users: UsersPermissionsUser[]
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <>
      <UserListHeader title="Users" />
      <List fontSize="sm" spacing={5} flex={1}>
        {users.map((user) => (
          <UserListItem key={user?.id} user={user} />
        ))}
      </List>
    </>
  )
}

export default UsersList
