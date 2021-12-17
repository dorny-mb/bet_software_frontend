import { FlexProps, useColorModeValue } from '@chakra-ui/react'
import { MotionProps, Variants } from 'framer-motion'
import React from 'react'
import MotionFlex from '../MotionFlex'

export type CardProps = FlexProps &
  MotionProps & {
    shouldAnimate?: boolean
  }

const Card: React.FC<CardProps> = ({ children, shouldAnimate, ...rest }) => {
  const variants: Variants = {
    show: {
      y: 0,
      opacity: 1
    },
    hide: {
      y: 50,
      opacity: 0
    }
  }
  const bg = useColorModeValue('white', 'brand.300')

  return (
    <MotionFlex
      animate="show"
      initial="hide"
      variants={shouldAnimate ? variants : {}}
      {...rest}
      bg={bg}
    >
      {children}
    </MotionFlex>
  )
}

Card.defaultProps = {
  width: 'auto',
  rounded: 'md',
  border: 'none',
  onClick: () => false,
  flexDirection: 'column'
}

export default Card
