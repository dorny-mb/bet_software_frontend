import React, { memo } from 'react'
import { List, ListItem } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import { API_HOST } from '../../constants'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

type socialButtonsTypes = {
  name: string
  icon: JSX.Element
  color: string
}
const providersNames = [
  {
    name: 'facebook',
    icon: <FaFacebook />,
    color: 'facebook'
  },
  {
    name: 'google',
    icon: <FaGoogle />,
    color: 'yellow'
  }
]

const LoginButton: React.FC<{ providerName: socialButtonsTypes }> = ({ providerName }) => (
  <a href={`${API_HOST}/connect/${providerName.name}`}>
    <Button
      width="100%"
      my={2}
      colorScheme={providerName.color}
      leftIcon={providerName.icon}
      size="md"
      fontSize="xs"
    >
      Connect with {providerName.name}
    </Button>
  </a>
)

const SocialButtons: React.FC = () => (
  <List>
    {providersNames.map((providerName) => (
      <ListItem key={providerName.name}>
        <LoginButton providerName={providerName} />
      </ListItem>
    ))}
  </List>
)

export default memo(SocialButtons)
