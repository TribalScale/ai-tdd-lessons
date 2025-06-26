import React, { useState } from 'react'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { TodoForm } from './TodoForm'
import { TodoListView } from './TodoListView'

export function App() {
  const [list] = useState(() => new TodoList())
  const [text, setText] = useState('')
  const [status, setStatus] = useState('pending')
  const [_, forceUpdate] = useState(0)

  function handleAdd(e) {
    e.preventDefault()
    try {
      list.add(new TodoItem(text, status))
      setText('')
      setStatus('pending')
      forceUpdate(x => x + 1)
    } catch (err) {
      alert(err.message)
    }
  }

  function handleRemove(idx) {
    list.remove(idx)
    forceUpdate(x => x + 1)
  }

  function handleSort() {
    list.sortByStatus()
    forceUpdate(x => x + 1)
  }

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>To-Do List</h1>
      <TodoForm
        text={text}
        status={status}
        onTextChange={setText}
        onStatusChange={setStatus}
        onAdd={handleAdd}
      />
      <TodoListView
        items={list.getAll()}
        onRemove={handleRemove}
        onSort={handleSort}
      />
    </div>
  )
} 