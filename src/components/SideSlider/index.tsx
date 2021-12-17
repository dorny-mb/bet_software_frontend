import {
  Box,
  Container,
  Flex,
  FlexProps,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  useMediaQuery,
  VStack
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Variants } from 'framer-motion'
import * as React from 'react'
import { theme } from 'theme'

import { MotionFlex, Version } from '..'

const PanelWrapper = styled(MotionFlex)`
  top: 0;
  left: 0;
  bottom: 0;
  width: 440px;
  display: flex;
  max-width: 100%;
  position: fixed;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`

const variants: Variants = {
  hidden: {
    x: '-350px'
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      damping: 18
    }
  }
}
type SideSliderProps = FlexProps & { title?: string }

const SideSlider: React.FC<SideSliderProps> = ({ children, justify, title }) => {
  const bg = useColorModeValue('white', 'brand.300')
  const color = useColorModeValue('gray.700', 'gray.100')
  const [isTabletOrMobile] = useMediaQuery('(max-width: 40em)')
  return (
    <>
      <PanelWrapper
        bg={bg}
        initial="hidden"
        animate="visible"
        color={color}
        borderRadius="0 1.5rem 0 0"
        variants={variants}
      >
        <Stack
          p={8}
          spacing={12}
          pr={[6, 8]}
          pl={[28, 36]}
          width="100%"
          overflowY="auto"
          minHeight="100%"
          justify={justify}
        >
          <Box>
            <Heading as="h2" fontSize="2xl">
              {title}
            </Heading>
          </Box>
          {children}
          <Version />
        </Stack>
      </PanelWrapper>
      {!isTabletOrMobile && (
        <Flex pl="330px" flex={1} width="100%">
          <Container display="flex" justifyContent="center" alignItems="center" maxW="container.md">
            <VStack>
              <Heading as="h2" fontSize="5xl" fontWeight="bold">
                Welcome to{' '}
                <span
                  style={{
                    color: theme.colors.brand[100]
                  }}
                >
                  BET software
                </span>
              </Heading>
              <Text my={4}>
                We are one of the most diverse betting software providers in Sub-Saharan Africa
              </Text>
            </VStack>
          </Container>
        </Flex>
      )}
    </>
  )
}

export default SideSlider

SideSlider.defaultProps = {
  justify: 'flex-start'
}
