import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { App } from './App'

function addTodo(text, status = 'pending') {
  const input = screen.getByPlaceholderText(/add a to-do/i)
  fireEvent.change(input, { target: { value: text } })
  const select = screen.getByRole('combobox')
  fireEvent.change(select, { target: { value: status } })
  fireEvent.click(screen.getByText(/add$/i))
}

describe('To-Do List App UI', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('renders the form and list', () => {
    expect(screen.getByText(/to-do list/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/add a to-do/i)).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText(/add$/i)).toBeInTheDocument()
  })

  it('adds a todo item', () => {
    addTodo('Test task')
    expect(screen.getByText(/test task/i)).toBeInTheDocument()
    expect(screen.getByText(/pending/i)).toBeInTheDocument()
  })

  it('removes a todo item', () => {
    addTodo('Task to remove')
    const removeBtn = screen.getByText('Remove')
    fireEvent.click(removeBtn)
    expect(screen.queryByText(/task to remove/i)).not.toBeInTheDocument()
  })

  it('sorts with pending at the bottom', () => {
    addTodo('Completed task', 'completed')
    addTodo('Pending task', 'pending')
    fireEvent.click(screen.getByText(/sort/i))
    const items = screen.getAllByRole('listitem')
    expect(items[items.length - 1].textContent).toMatch(/pending/i)
  })

  it('shows an alert for empty input', () => {
    window.alert = vi.fn()
    fireEvent.click(screen.getByText(/add$/i))
    expect(window.alert).toHaveBeenCalledWith('Text must be a non-empty string')
  })
}) 