import React from 'react'
import { render } from '@testing-library/react'
import Button1 from '..'
import { VscAdd } from 'react-icons/vsc'

describe('<Button1 />', () => {
  const setup = () => {
    const utils = render(<Button1 icon={VscAdd}>i have children</Button1>)
    return { ...utils }
  }

  it('renders button1 component', () => {
    const { getByRole } = setup()
    const linkElement = getByRole('button')
    expect(linkElement).toBeInTheDocument()
  })
  it('button should render children', () => {
    const { getByText } = setup()
    const child = getByText(/i have children/i)
    expect(child.textContent).toBe('i have children')
  })
})
