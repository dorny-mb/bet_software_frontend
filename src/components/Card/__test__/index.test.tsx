import * as React from 'react'
import { render } from '@testing-library/react'
import Card from '..'

describe('<Card />', () => {
  const setup = () => {
    const utils = render(
      <Card>
        <div>i have children</div>
      </Card>
    )
    return { ...utils }
  }

  it('should render without crashing', () => {
    const { container } = setup()
    expect(container).toBeTruthy()
  })

  it('should render children', () => {
    const { getByText } = setup()
    const child = getByText(/i have children/i)
    expect(child).toBeDefined()
  })
})
