import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Counter from '../Counter'

test('Counter renders correctly', () => {
  render(<Counter />)

  expect(screen.getByText('0')).toBeInTheDocument()
})
