import React from 'react'

export default function TodoItem (props) {
  const { item, toggleDone } = props

  return (
    <li className='TodoItem'>
      <input
        id={`todo-${item.id}`}
        type='checkbox'
        checked={item.done}
        onChange={() => toggleDone(item.id)}
      />
      <label htmlFor={`todo-${item.id}`} className={item.done ? 'done' : undefined}>{item.task}</label>
    </li>
  )
}
