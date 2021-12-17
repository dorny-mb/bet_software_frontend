import { Flex, FormControl, FormLabel, Textarea, TextareaProps, Text } from '@chakra-ui/react'
import { useField } from 'formik'
import * as React from 'react'
import { LabelProps } from '../styles'

export type ConnectedTextareaProps = LabelProps &
  TextareaProps & {
    label?: string
    name: string
  }

const ConnectedTextarea: React.FC<ConnectedTextareaProps> = ({ label, ...rest }) => {
  const [field, meta] = useField(rest.name)
  return (
    <Flex flexDirection="column" width="100%" mr={rest.mr} ml={rest.ml} mt={rest.mt} mb={rest.mb}>
      <FormControl>
        {label && <FormLabel htmlFor={field.name}>{label}</FormLabel>}
        <Textarea focusBorderColor="gray.500" {...field} id={field.name} {...rest} />
        {meta.touched && meta.error ? (
          <Text color="red.500" textAlign="right">
            {meta.error}
          </Text>
        ) : null}
      </FormControl>
    </Flex>
  )
}

export default ConnectedTextarea

ConnectedTextarea.defaultProps = {
  mb: 2
}
