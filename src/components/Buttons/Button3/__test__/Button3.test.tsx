import React from 'react'
import { render, screen } from '@testing-library/react'
import Button3 from '..'

it('renders button3 component', () => {
  render(<Button3 />)
  const linkElement = screen.getByRole('button')
  expect(linkElement).toBeInTheDocument()
})
