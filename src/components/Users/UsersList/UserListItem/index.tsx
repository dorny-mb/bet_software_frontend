import { ListItem, Icon, Text, Grid, Avatar, AvatarBadge, useMediaQuery } from '@chakra-ui/react'
import { Card, StatusBadge } from 'components'
import { API_HOST } from '../../../../constants'

import { UsersPermissionsUser } from 'generated/graphql'

import React from 'react'
import { VscChevronRight } from 'react-icons/vsc'

type UserListItemProps = {
  user: UsersPermissionsUser
}

const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
  const [isTabletOrMobile] = useMediaQuery('(max-width: 40em)')
  return (
    <ListItem key={user?.id}>
      <Card
        display="flex"
        flexDirection="row"
        alignItems="center"
        boxShadow="0 0 1rem #00000005"
        cursor="pointer"
        shouldAnimate
        p={3}
      >
        <Grid
          templateColumns={isTabletOrMobile ? 'auto' : 'repeat(4, 1fr)'}
          alignItems="center"
          gap={[2, 3, 6]}
          px={3}
          flex={1}
        >
          <Avatar src={API_HOST + user?.profilePicture?.url} name={user?.username}>
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>

          <Text fontWeight="semibold" fontSize={['2xl', 'sm', 'sm']} textAlign="left">
            {user?.username}
          </Text>

          <Text color="brand.500" fontWeight={['normal', 'semibold']}>
            {user?.email}
          </Text>

          <StatusBadge status={user?.confirmed ? 'confirmed' : 'not confirmed'} />
        </Grid>
        {!isTabletOrMobile && <Icon as={VscChevronRight} color="brand.50" />}
      </Card>
    </ListItem>
  )
}

export default UserListItem
