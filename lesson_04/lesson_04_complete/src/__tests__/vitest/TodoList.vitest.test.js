import { describe, it, expect, beforeEach } from 'vitest'
import { TodoList } from '../../TodoList'
import { TodoItem } from '../../TodoItem'

describe('TodoList', () => {
  let list

  beforeEach(() => {
    list = new TodoList()
  })

  it('should add and get items', () => {
    const item = new TodoItem('Task 1', 'pending')
    list.add(item)
    expect(list.get(0)).toBe(item)
    expect(list.getAll()).toEqual([item])
  })

  it('should remove items by index', () => {
    const item1 = new TodoItem('Task 1', 'pending')
    const item2 = new TodoItem('Task 2', 'completed')
    list.add(item1)
    list.add(item2)
    list.remove(0)
    expect(list.getAll()).toEqual([item2])
  })

  it('should throw when removing with invalid index', () => {
    expect(() => list.remove(0)).toThrow('Invalid index')
  })

  it('should throw when getting with invalid index', () => {
    expect(() => list.get(0)).toThrow('Invalid index')
  })

  it('should sort items with pending at the bottom', () => {
    const item1 = new TodoItem('Task 1', 'pending')
    const item2 = new TodoItem('Task 2', 'completed')
    const item3 = new TodoItem('Task 3', 'pending')
    const item4 = new TodoItem('Task 4', 'completed')
    list.add(item1)
    list.add(item2)
    list.add(item3)
    list.add(item4)
    list.sortByStatus()
    const statuses = list.getAll().map(i => i.getStatus())
    expect(statuses.slice(-2)).toEqual(['pending', 'pending'])
    expect(statuses[0]).not.toBe('pending')
  })
}) 