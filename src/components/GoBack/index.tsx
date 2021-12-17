import { HStack, Icon, StackProps, Text } from '@chakra-ui/react'
import React from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

type GoBackProps = {} & StackProps

const GoBack: React.FC<GoBackProps> = ({ ...rest }) => {
  const history = useHistory()
  return (
    <HStack
      spacing={2}
      cursor="pointer"
      onClick={() => {
        history.replace({ state: { refetch: false } })
        history.goBack()
      }}
      {...rest}
    >
      <Icon as={FiChevronLeft} color="brand.100" />
      <Text px={1} fontWeight="bold" fontSize="xs">
        Go Back
      </Text>
    </HStack>
  )
}

export default GoBack
