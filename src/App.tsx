import { FormEvent, useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState<string>('')
  const [list, setList] = useState<string[]>([])

  const handleClick = (e:FormEvent) => {
    e.preventDefault()

    if(task === ''){
      alert('type a task before adding')
      return ''
    }

    setList((prevTasks)=>[...prevTasks, task])

    setTask('')
  }

  // const handleDelete = (id: TodoItem['id']) => {
  //   setList(prev => prev.filter(item => item.id !== id))
  // }

  // const handleAdd = (index: number) => {
  //   const newItem = { id: count++, value: '' }
  //   setList(prev => [...prev.slice(0, index + 1), newItem, ...prev.slice(index + 1)])
  // }

  return (
    <div>
      <form action="">
      <input type="text" placeholder='type your task' onChange={(event)=> setTask(event?.target.value)} value={task}/> 
      <button type='submit' onClick={(event)=> handleClick(event)}>Add task</button>

      {/* {task > 1 (
        <button>remove task</button>
      )} */}
      </form>

      <div>
        <ul>
          {list.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
