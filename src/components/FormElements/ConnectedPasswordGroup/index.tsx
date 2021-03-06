import {
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useField } from 'formik'
import * as React from 'react'
import { Eye, EyeOff } from 'react-feather'
import { LabelProps } from '../styles'

export type ConnectedFormGroupProps = LabelProps &
  InputProps & {
    label?: string
    name: string
  }

const ConnectedFormGroup: React.FC<ConnectedFormGroupProps> = ({ label, type, ...rest }) => {
  const [field, meta] = useField(rest.name)
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const bg = useColorModeValue('gray.100', 'brand.200')
  return (
    <Flex flexDirection="column" width="100%" mr={rest.mr} ml={rest.ml} mt={rest.mt} mb={rest.mb}>
      <FormControl>
        {label && (
          <FormLabel fontSize="xs" htmlFor={field.name}>
            {label}
          </FormLabel>
        )}
        <InputGroup size="md">
          <Input
            bg={bg}
            border="none"
            fontSize="sm"
            focusBorderColor="brand.50"
            type={show ? 'text' : type}
            {...field}
            {...rest}
            id={field.name}
            {...rest}
          />
          <InputRightElement>
            <Icon
              size="20px"
              onClick={handleClick}
              as={show ? EyeOff : Eye}
              color={show ? 'secondary.500' : 'primary.400'}
            />
          </InputRightElement>
        </InputGroup>
        {meta.touched && meta.error ? (
          <Text color="red.500" fontSize="xs" textAlign="right">
            {meta.error}
          </Text>
        ) : null}
      </FormControl>
    </Flex>
  )
}

export default ConnectedFormGroup

ConnectedFormGroup.defaultProps = {
  mb: 2,
  type: 'password'
}
