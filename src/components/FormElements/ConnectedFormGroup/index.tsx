import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputProps,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useField } from 'formik'
import * as React from 'react'
import { LabelProps } from '../styles'

export type ConnectedFormGroupProps = LabelProps &
  InputProps & {
    label?: string
    name: string
  }

const ConnectedFormGroup: React.FC<ConnectedFormGroupProps> = ({ label, ...rest }) => {
  const [field, meta] = useField(rest.name)
  const bg = useColorModeValue('gray.100', 'brand.200')
  return (
    <Flex flexDirection="column" width="100%" mr={rest.mr} ml={rest.ml} mt={rest.mt} mb={rest.mb}>
      <FormControl>
        {label && (
          <FormLabel htmlFor={field.name} fontSize="xs">
            {label}
          </FormLabel>
        )}
        <Input
          bg={bg}
          fontSize="xs"
          border="none"
          focusBorderColor="brand.50"
          {...field}
          id={field.name}
          {...rest}
        />
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
  type: 'text'
}
