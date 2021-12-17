import React from 'react'
import { render, screen } from '@testing-library/react'
import UserListHeader from '..'

it('renders the UserListHeader component', () => {
  render(<UserListHeader title="Header" />)
  const element = screen.getByText(/Header/i)
  expect(element).toBeInTheDocument()
})
