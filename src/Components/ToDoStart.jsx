import React from 'react'
import { IconArrowNarrowRight } from '@tabler/icons-react';

const ToDoStart = ({onClose}) => {
  return (
    <>
      <div className='flex md:justify-center items-center flex-col w-[100%] h-[50%] md:h-[100%] bg-gradient-to-bl to-[#3f87a6] from-[#ebf8e1] rounded-xl shadow-2xl shadow-blue-400 rounded-tr-4xl rounded-bl-4xl p-5 md:p-10:pt-2'>
        <div className='relative flex flex-col justify-center items-center h-[100%] w-[100%]'>  
          <div className='text-center text-lg'>
            <h1 className='text-2xl md:text-7xl md:mb-5 font-bold pb-2'>To-Do</h1>
            <p className='font-thin md:text-xl'>Manage your tasks efficiently</p>
          </div>
          <div className='absolute'>
            <p></p>
            <img src="" alt="" />
          </div>
          <div className='absolute left-18 -top-1'>
            {/* <img className='w-55 left-10' src="public/to.jpg" alt="" /> */}
            <p className=''></p>
          </div>
          <div className='text-xl md:text-2xl border mt-10 md:mt-20 w-30 py-1 md:w-35 rounded flex justify-center'>
            <button onClick={onClose} className='flex justify-between items-center'>Start
              <IconArrowNarrowRight className='inline-block ml-2' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ToDoStart