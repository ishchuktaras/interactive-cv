import { render, screen } from '@testing-library/react'
import CV from './cv'
import '@testing-library/jest-dom'

describe('CV Component', () => {
  it('renders the profile section', () => {
    render(<CV />)
    expect(screen.getByText('Taras Ishchuk')).toBeInTheDocument()
  })

  it('toggles between languages', () => {
    render(<CV />)
    // Test language toggle functionality
    const czechButton = screen.getByText('Česky')
    czechButton.click()
    expect(screen.getByText('Profil & Projekty')).toBeInTheDocument()
  })
})