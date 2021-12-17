import React from 'react'
import { render, screen } from '@testing-library/react'
import Button5 from '..'

it('renders button5 component', () => {
  render(<Button5 />)
  const linkElement = screen.getByRole('button')
  expect(linkElement).toBeInTheDocument()
})
