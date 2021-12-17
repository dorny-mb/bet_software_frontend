import { Badge, BadgeProps } from '@chakra-ui/react'
import { get } from 'lodash'
import React from 'react'

type CustomBadgeProps = {
  title: string
} & BadgeProps
export const CustomBadge: React.FC<CustomBadgeProps> = ({ title, colorScheme, ...rest }) => {
  return (
    <Badge
      _before={{
        content: '""',
        minW: 2,
        display: 'inline-flex',
        mr: 4,
        minH: 2,
        bg: colorScheme,
        borderRadius: 'full'
      }}
      textAlign="center"
      colorScheme={colorScheme}
      textTransform="capitalize"
      borderRadius="md"
      px={5}
      py={3}
      {...rest}
    >
      {title}
    </Badge>
  )
}
export const statuses = {
  'not confirmed': <CustomBadge colorScheme="orange" title="Not Confirmed" borderRadius="md" />,
  confirmed: <CustomBadge title="Confirmed" colorScheme="green" />
}

type StatusBadgeProps = {
  status: string
}
const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return <>{get(statuses, status?.toLowerCase())}</>
}

export default StatusBadge
