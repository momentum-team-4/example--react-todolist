import React, { useState } from 'react'
import './App.css'

function App () {
  const [todoItems, setTodoItems] = useState([
  ])
  const [newItem, setNewItem] = useState('')

  // return React.createElement('div', { className: 'App' }, [
  //   React.createElement('h1', {}, 'Todo List'),
  //   React.createElement('ul', {}, todoItems.map(item => (
  //     React.createElement('li', {}, item)
  //   )))
  // ])

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <p>{todoItems.length} item{todoItems.length !== 1 && 's'}</p>
      <ul>
        {todoItems.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
      <h2>Add an item</h2>
      <div>
        <input
          type='text' placeholder='Get it done'
          value={newItem}
          onChange={event => setNewItem(event.target.value)}
        />
      </div>
      <div>
        <button onClick={() => {
          const newItems = todoItems.concat(newItem)
          setTodoItems(newItems)
          setNewItem('')
        }}
        >
        Add an item
        </button>
      </div>
    </div>
  )
}

export default App
