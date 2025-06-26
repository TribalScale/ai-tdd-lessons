import React from 'react'

export function TodoListView({ items, onRemove, onSort }) {
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