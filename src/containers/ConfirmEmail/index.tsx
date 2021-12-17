import { Flex, Image, Text, Heading } from '@chakra-ui/react'
import { GridGenerator, Card } from 'components'
import { Button4 } from 'components/Buttons'
import * as React from 'react'
import { useHistory } from 'react-router-dom'

import { PageWrap } from '../../layouts'
import { images } from '../../theme'

type ConfirmEmailProps = {}

const ConfirmEmail: React.FC<ConfirmEmailProps> = () => {
  const history = useHistory()

  return (
    <PageWrap title="Confirm Email" align="center" backgroundSize="cover" justify="center" pt={0}>
      <GridGenerator cols={1}>
        <Flex align="center" justify="center" width="100%">
          <Card bg="transparent" maxWidth="350px" alignItems="center" justifyContent="center" p={6}>
            <Image src={images.logo} width="150px" />
            <Heading as="h5" fontWeight="bold" my={4}>
              Confirm Email
            </Heading>
            <Text fontSize="sm" textAlign="center" mb={5}>
              Before you can access the platform please confirm your email.
            </Text>
            <Button4 onClick={() => history.push('/')}>Back To Login</Button4>
          </Card>
        </Flex>
      </GridGenerator>
    </PageWrap>
  )
}

export default ConfirmEmail
