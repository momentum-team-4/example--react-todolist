import React, { useState } from 'react'

export default function AddItem (props) {
  const { createNewItem } = props
  const [newItemTask, setNewItemTask] = useState('')

  return (
    <div className='AddItem'>
      <h2>Add an item</h2>
      <div>
        <input
          type='text' placeholder='Get it done'
          value={newItemTask}
          onChange={event => setNewItemTask(event.target.value)}
        />
      </div>
      <div>
        <button onClick={() => {
          if (newItemTask !== '') {
            createNewItem(newItemTask)
            setNewItemTask('')
          }
        }}
        >
          Add an item
        </button>
      </div>
    </div>
  )
}
