"use client"
import React, { useState } from 'react'

const App = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [MainTask, setMainTask] = useState([])
  const [count, setcount] = useState(0)
  const submitHandler = (e)=>{
       e.preventDefault()
       setMainTask([...MainTask,{title,desc}])
       settitle("")
       setdesc("")
  }
  const DeleteHandler = (i)=>{
     let copyTask = [...MainTask]
     copyTask.splice(i,1)
     setMainTask(copyTask)
  }
  const completed = ()=>{
    if(MainTask.length=0){
      setcount(0)
    }
    else{
      setcount(count+1)
    }
  }
  let renderTask = <h2>No Task Available</h2>
  if (MainTask.length>0) {
    renderTask = MainTask.map((t,i)=>{
      return( <li key={i} className='flex items-center justify-between mb-5'>
        <div className='w-2/3 flex justify-between mb-5'>
      <h4 className='text-2xl font-semibold'>({i+1}). Title : {t.title}</h4>
      <h5 className='text-lg font-medium'>Description : {t.desc}</h5>
      </div>
      <button onClick={()=>{
        DeleteHandler(i)
      }} className='bg-red-400 px-4 py-2 rounded text-white font-bold'>Delete Task</button>
      <button onClick={()=>{
        DeleteHandler(i)
        completed()
      }} className='bg-green-600 px-4 py-2 rounded text-white font-bold'>Task Completed</button>
      </li>
      );
    }) 
  }
return(
<>
    <h1  className="bg-black text-white p-5 text-4xl font-bold text-center" >Mohit's TO-DO List</h1>
    <form onSubmit={submitHandler}>
      <input value={title} type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter Title Here'
      onChange={(e)=>{
        settitle(e.target.value)
      }} />
      <input value={desc} type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter Description Here' 
       onChange={(e)=>{
        setdesc(e.target.value)
      }}/>
      <button className='bg-black text-white px-4 py-2 text-xxl font-bold m-5 rounded'>Add Task</button>
    </form>
    <hr />
    <h3 className='text-2xl font-blue bg-lime-200 m-2 w-fit px-4 py-2'>Tasks Completed Today : {count}</h3>
    <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default App