import {
  Flex,
  FormControl,
  FormLabel,
  Select,
  SelectProps,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useField } from 'formik'
import * as React from 'react'
import { LabelProps } from '../styles'

export type OptionType = {
  label: string
  value: any
}

export type ConnectedSelectProps = LabelProps &
  SelectProps & {
    label?: string
    name: string
    options: OptionType[]
  }

const ConnectedSelect: React.FC<ConnectedSelectProps> = ({ label, options, ...rest }) => {
  const [field, meta] = useField(rest.name)
  return (
    <Flex flexDirection="column" width="100%" mr={rest.mr} ml={rest.ml} mt={rest.mt} mb={rest.mb}>
      <FormControl>
        {label && (
          <FormLabel fontSize="xs" htmlFor={field.name}>
            {label}
          </FormLabel>
        )}
        <Select
          bg={useColorModeValue('gray.100', 'brand.200')}
          border="none"
          fontSize="xs"
          focusBorderColor="accent.500"
          {...field}
          id={field.name}
          {...rest}
        >
          {options.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
        {meta.touched && meta.error ? (
          <Text color="red.500" fontSize="xs" textAlign="right">
            {meta.error}
          </Text>
        ) : null}
      </FormControl>
    </Flex>
  )
}

export default ConnectedSelect

ConnectedSelect.defaultProps = {
  mb: 2,
  options: []
}
