import React from 'react'

const ButtonStyle = ({title}) => {
  return (
    <div className='flex items-center justify-center py-1 bg-gradient-to-r from-red-600 to-red-500 rounded-md
    w-[90px] hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600
    '>
        <button className='text-gray-50'>{title}</button>
    </div>
  )
}

export default ButtonStyle