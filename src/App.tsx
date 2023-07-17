import { useState } from 'react'
import './App.css'

interface TodoItem {
  id: number,
  value: string
}

let count:number = 1

function App() {
  const [list, setList] = useState<TodoItem[]>([{id: 0, value: ''}])

  const handleChange = (value: string, id: TodoItem['id']) => {
    setList(prev => prev.map(item => item.id === id ? {...item, value}: item))
  }

  const handleDelete = (id: TodoItem['id']) => {
    setList(prev => prev.filter(item => item.id !== id))
  }

  const handleAdd = (index: number) => {
    const newItem = { id: count++, value: '' }
    setList(prev => [...prev.slice(0, index + 1), newItem, ...prev.slice(index + 1)])
  }

  return (
    <div>
      {list.map((item, index) => (
        <div key={item.id}>
          <input type="text" value={item.value} onChange={e => handleChange(e.currentTarget.value, item.id)}/>

          <button onClick={() => handleAdd(index)}>add task</button>
          {list.length > 1 && (
            <button onClick={()=>handleDelete(item.id)}>remove task</button>
          )}
        </div>
      ))}
    </div>
  )
}

export default App
