import React, { useState } from 'react'

function Todo() {
    const [tasks , setTasks] =useState([])
    const [input , setInput] =useState('')

    const handleBtn =()=>{
        if(input.trim() !==''){
           setTasks([...tasks,input])
           setInput('')
        }
    }
    const deleteItem=(index)=>{
        const updateTask = tasks.filter((_,i) => i  !==index)
        setTasks(updateTask)
    }
  return (
    <div>
        <div>
            <h1>Todo List</h1>
      <input type='text' value={input} placeholder='Enter Task' onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={handleBtn}>Add Task</button>
      <ul>
      {tasks.map((task,index)=>{
        return(
            <li key={index}>
                {task}
                <button onClick={()=>deleteItem(index)}>Delete</button>
            </li>
        )
      })}
      </ul>
      </div>
    </div>
  )
}

export default Todo
