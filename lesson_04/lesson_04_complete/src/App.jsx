import React, { useState } from 'react'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'

function TodoForm({ text, status, onTextChange, onStatusChange, onAdd }) {
  return (
    <form onSubmit={onAdd} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
      <input
        value={text}
        onChange={e => onTextChange(e.target.value)}
        placeholder="Add a to-do"
        style={{ flex: 1 }}
      />
      <select value={status} onChange={e => onStatusChange(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Add</button>
    </form>
  )
}

function TodoListView({ items, onRemove, onSort }) {
  return (
    <>
      <button onClick={onSort} style={{ marginBottom: 16 }}>Sort (Pending at bottom)</button>
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {items.map((item, idx) => (
          <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ flex: 1, textDecoration: item.getStatus() === 'completed' ? 'line-through' : 'none' }}>
              {item.getText()} ({item.getStatus()})
            </span>
            <button onClick={() => onRemove(idx)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  )
}

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