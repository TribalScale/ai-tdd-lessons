import { TodoItem } from '../TodoItem'

describe('TodoItem', () => {
  it('should create a todo item with text and default status', () => {
    const todo = new TodoItem('Buy milk')
    expect(todo.getText()).toBe('Buy milk')
    expect(todo.getStatus()).toBe('pending')
  })

  it('should create a todo item with a valid custom status', () => {
    const todo = new TodoItem('Read book', 'completed')
    expect(todo.getStatus()).toBe('completed')
  })

  it('should throw if text is empty', () => {
    expect(() => new TodoItem('')).toThrow('Text must be a non-empty string')
    expect(() => new TodoItem('   ')).toThrow('Text must be a non-empty string')
  })

  it('should throw if text is not a string', () => {
    expect(() => new TodoItem(null)).toThrow('Text must be a non-empty string')
    expect(() => new TodoItem(undefined)).toThrow('Text must be a non-empty string')
    expect(() => new TodoItem(123)).toThrow('Text must be a non-empty string')
  })

  it('should throw if status is invalid', () => {
    expect(() => new TodoItem('Task', 'done')).toThrow('Invalid status')
    expect(() => new TodoItem('Task', '')).toThrow('Invalid status')
  })

  it('should allow changing status to valid values', () => {
    const todo = new TodoItem('Do laundry')
    todo.setStatus('completed')
    expect(todo.getStatus()).toBe('completed')
    todo.setStatus('pending')
    expect(todo.getStatus()).toBe('pending')
  })

  it('should throw if setting status to an invalid value', () => {
    const todo = new TodoItem('Do laundry')
    expect(() => todo.setStatus('invalid')).toThrow('Invalid status')
    expect(() => todo.setStatus('')).toThrow('Invalid status')
  })
}) 