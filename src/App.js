import React, { useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'
import AddItem from './components/AddItem'
import { pluralize } from './util'

function App () {
  const [todoItems, setTodoItems] = useState([
    { id: 1, task: 'Take out the papers', done: false },
    { id: 2, task: 'And the trash', done: false },
    { id: 3, task: 'Get some spending cash', done: false }
  ])

  const [hideDone, setHideDone] = useState(false)

  function nextItemId () {
    const ids = todoItems.map(item => item.id)
    return Math.max(...ids) + 1
  }

  function toggleDone (itemId) {
    // make a new array of todo items
    const newItems = todoItems.slice()
    // find the item with id === itemId
    const item = todoItems.find(item => item.id === itemId)
    // toggle the done status of that item
    item.done = !item.done
    // call setTodoItems with new array
    setTodoItems(newItems)
  }

  function shouldShowItem (item) {
    return !(item.done && hideDone)
  }

  const numDone = todoItems.filter(i => i.done).length
  const numUndone = todoItems.filter(i => !i.done).length

  return (
    <div className='App'>
      <div className='app-header'>
        <h1>Todo List</h1>
        <p>
          {numUndone} {pluralize(numUndone, 'item')} to do /
          {' '}
          {numDone} {pluralize(numDone, 'item')} done
        </p>
        <div>
          <button onClick={() => setHideDone(!hideDone)}>
            {hideDone ? 'Show completed items' : 'Hide completed items'}
          </button>
        </div>
      </div>
      <ul className='todo-items'>
        {todoItems.map(item => (
          shouldShowItem(item) &&
            <TodoItem key={item.id} item={item} toggleDone={toggleDone} />
        ))}
      </ul>
      <AddItem createNewItem={(task) => {
        const newItem = { id: nextItemId(), task: task, done: false }
        const newItems = todoItems.concat(newItem)
        setTodoItems(newItems)
      }}
      />
    </div>
  )
}

export default App
