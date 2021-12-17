import React from 'react'
import { render, screen } from '@testing-library/react'
import Button4 from '..'

it('renders button4 component', () => {
  render(<Button4 />)
  const linkElement = screen.getByRole('button')
  expect(linkElement).toBeInTheDocument()
})
