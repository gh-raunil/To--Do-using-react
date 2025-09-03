import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoStart from './Components/ToDoStart'
import ToDoMain from './Components/ToDoMain'

function App() {
const [showTodo, setshowTodo] = useState(true);

const handleToggle = () => {
  setshowTodo(!showTodo);
}

  return (
    <>
    <div className='w-[100%] !h-[1000%] md:!h-[80%] max-w-xl md:max-[392px]:h-[90%] backdrop-blur-2xl flex flex-col justify-center items-start rounded-2xl sm:shadow-xl shadow-gray-400 bg-gradient-to-bl to-[#3f87a6] from-[#ebf8e1] px-2 py-2 '>
      {showTodo ? (
        <ToDoStart onClose={handleToggle} />
      ) : (
        <ToDoMain onOpen={handleToggle} />
      )}

      <div className='absolute left-0 w-[100%] h-[100%] rounded-xl -z-10 backdrop-blur-4xl'></div>
    </div>
    </>
  )
}

export default App
