import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Index from './index'

describe('Index', () => {
  it('Should render index component', () => {
    render(<Index />)
    const heading = screen.getByRole('heading', { name: /Boilerplate NextJS/i })
    expect(heading).toBeInTheDocument()
  })
})
