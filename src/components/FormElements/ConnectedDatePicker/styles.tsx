import { useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { space, SpaceProps } from 'styled-system'
import { theme } from '../../../theme'

export const DatePickerSelect = styled.select<SpaceProps>`
  ${space};
  height: 36px;
`

export const DatePickerWrapper = styled.div`
  width: 100%;
  .DateInput {
    display: flex;
    width: 100%;
    border: none;
    background: transparent;
  }
  .DateInput_input {
    display: flex;
    font-weight: 400;
    background-color: ${() => useColorModeValue(theme.colors.gray[100], theme.colors.brand[200])};
    border-radius: 4px;
    font-style: normal;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    transition: all 0.2s;
    outline: none;
    font-size: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: small;
    height: 2.5rem;
    line-height: 2.5rem;
    color: ${() => useColorModeValue(theme.colors.brand[300], theme.colors.brand[400])};
    border-radius: 0.25rem;
    border: none;
    &:hover {
      border-color: ${theme.colors.gray[300]};
    }
    &:disabled {
      opacity: 0.5;
    }
  }
  .DateInput_input__focused {
    box-shadow: 0 0 0 1px ${theme.colors.brand[500]};
    border-color: ${theme.colors.brand[500]};
  }
  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: ${theme.colors.brand[500]};
    border: 1px double ${theme.colors.brand[500]};
    color: #fff;
  }
  .SingleDatePicker {
    display: flex;
  }
  .SingleDatePicker_picker {
    z-index: 1700;
  }
  .SingleDatePicker > div,
  .SingleDatePicker > div > .SingleDatePickerInput {
    width: 100%;
    background: transparent;
  }
  .SingleDatePickerInput__withBorder {
    border: none;
  }
  .CalendarMonth_caption {
    padding-top: 16px;
  }
`
