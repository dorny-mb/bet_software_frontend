import { Flex, FlexProps, FormControl, FormLabel } from '@chakra-ui/react'
import { useField, useFormikContext } from 'formik'
import * as React from 'react'
import {
  ColorProps,
  SpaceProps,
  TypographyProps,
  color,
  compose,
  space,
  typography
} from 'styled-system'
import { motion } from 'framer-motion'
import { LabelProps } from '../styles'
import Select from 'react-select'
import { theme } from '../../../theme'
import styled from '@emotion/styled'

export type Option =
  | {
      label: string | number
      value: string | number | boolean
    }
  | unknown

export type TextProps = SpaceProps &
  ColorProps &
  TypographyProps & {
    color?: any
  }

export type ConnectedSearchableSelectProps = LabelProps &
  FlexProps & {
    options: Array<Option>
    label: string
    name: string
    autoFocus?: boolean
    color?: string
    inputValue?: string
    isMulti?: boolean
    isClearable?: boolean
    isDisabled?: boolean
    isSearchable?: boolean
    menuIsOpen?: boolean
    placeholder?: string
    onChange?: (option: any) => void
    onBlur?: () => void
    value: string
    setSearchName?: (data: string) => void | undefined
    scrollHandler?: () => void
    loading?: boolean
  }

const StyledSelect = styled(Select)`
  & .react-select__menu .react-select__menu-list .react-select__option--is-selected {
    background-color: ${theme.colors.brand[500]};
  }
  & .react-select__control--is-focused {
    border: solid 2px ${theme.colors.accent[500]};
    box-shadow: none;
  }
  & .react-select__control:hover {
    border: solid 1px ${theme.colors.gray[400]};
    box-shadow: none;
  }
`
const props = compose(space, color, typography)

const Text = styled(motion.span)<TextProps>(props)

const ConnectedSearchableSelect: React.FC<ConnectedSearchableSelectProps> = ({
  label,
  ...rest
}) => {
  const [field, meta] = useField(rest.name)
  const { setFieldValue } = useFormikContext()
  return (
    <Flex flexDirection="column" width="100%" mr={rest.mr} ml={rest.ml} mt={rest.mt} mb={rest.mb}>
      <FormControl>
        {label && <FormLabel htmlFor={field.name}>{label}</FormLabel>}
        <StyledSelect
          isDisabled={rest.isDisabled}
          placeholder={rest.placeholder}
          isClearable={rest.isClearable}
          isMulti={rest.isMulti}
          isSearchable={rest.isSearchable}
          classNamePrefix="react-select"
          menuIsOpen={rest.menuIsOpen}
          options={rest.options}
          isLoading={rest.loading}
          onInputChange={(data: string) => rest.setSearchName && rest.setSearchName(data)}
          onMenuScrollToBottom={rest.scrollHandler}
          inputValue={rest.inputValue}
          loadingMessage={() => 'loading...'}
          noOptionsMessage={() => 'no options'}
          {...field}
          id={field.name}
          name={rest.name}
          value={rest.value || null}
          onBlur={rest.onBlur}
          onChange={(option: Option) => setFieldValue(field.name, option)}
        />
        {meta.touched && meta.error ? (
          <Text color="red.500" textAlign="right">
            {meta.error}
          </Text>
        ) : null}
      </FormControl>
    </Flex>
  )
}

export default ConnectedSearchableSelect

ConnectedSearchableSelect.defaultProps = {
  mb: 2,
  options: []
}
