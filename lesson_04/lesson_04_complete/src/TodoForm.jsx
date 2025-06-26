import React from 'react'

export function TodoForm({ text, status, onTextChange, onStatusChange, onAdd }) {
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