import { Image, Heading, Text } from '@chakra-ui/react'
import * as React from 'react'
import { images } from '../../theme'
import Card from '../Card'
import RevealFlex from '../RevealFlex/index'

type EmptyListHandlerProps = {
  title?: string
  subTitle?: string
}

const EmptyListHandler: React.FC<EmptyListHandlerProps> = ({ title, subTitle }) => {
  return (
    <Card
      p={4}
      flex={1}
      align="center"
      justify="center"
      bg="transparent"
      border="none"
      flexDirection="column"
      shouldAnimate
      title="empty-card"
    >
      <RevealFlex>
        <Image src={images.noData} width="250px" maxWidth="100%" height="auto" />
        <Heading as="h2" mb={6} mt={20} fontSize="2xl" fontWeight="bold">
          {title}
        </Heading>
        <Text fontSize="sm" maxW="17.5rem" as="h4" textAlign="center">
          {subTitle}
        </Text>
      </RevealFlex>
    </Card>
  )
}

export default EmptyListHandler

EmptyListHandler.defaultProps = {
  title: 'there is nothing here.',
  subTitle: 'Go ahead and create your first record to get started.'
}
