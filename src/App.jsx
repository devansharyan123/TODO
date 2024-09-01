import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="absolute inset-0 z-[-1]">
      <img 
        src="https://images5.alphacoders.com/431/431462.jpg" 
        alt="Background" 
        className="w-full h-full object-cover" 
      />
    </div>
   <div className="relative px-8 py-3 font-bold text-white bg-transparent border-2 border-transparent rounded-md transition-all duration-300 
    border-opacity-0 hover:border-opacity-100 hover:border-transparent hover:shadow-[0_0_20px_10px_rgba(192,192,192,0.7)] hover:ring-2 
    hover:ring-transparent hover:ring-offset-4 hover:ring-offset-transparent">
      <h1 className='font-bold text-black'>Add Your Todo List</h1>
      <AddTodo />
      <Todos  />
      </div>
    </>
  )
}

export default App
