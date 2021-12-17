import React from 'react'
import { render, screen } from '@testing-library/react'

import Button2 from '..'

it('renders button2 component', () => {
  render(<Button2 />)
  const linkElement = screen.getByRole('button')
  expect(linkElement).toBeInTheDocument()
})
