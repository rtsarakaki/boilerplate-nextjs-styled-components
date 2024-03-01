import '@testing-library/jest-dom'
import 'jest-styled-components'
import { render, screen } from '@testing-library/react'

import Main from '.'

describe('Main', () => {
  // Renderiza o componente uma vez para todos os testes neste bloco describe
  beforeEach(() => {
    render(<Main />)
  })

  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /Boilerplate/i })
    ).toBeInTheDocument()
  })

  it('should not throw any JavaScript errors', () => {
    const consoleSpy = jest.spyOn(console, 'error')

    expect(consoleSpy).not.toHaveBeenCalled()

    consoleSpy.mockRestore()
  })
})
