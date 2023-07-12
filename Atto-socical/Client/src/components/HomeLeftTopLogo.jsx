import React from 'react'
import icons from '../asset/icon'

const HomeLeftTopLogo = () => {
  const {BiSearchAlt2} = icons
  return (
    <div>
      <div className='flex items-center'>
        <span className='text-gray-50 text-[25px] uppercase mr-3'>Atto</span>
        <div className='relative'>
          <input className='rounded-md outline-none pl-2'></input>
          <div className='absolute top-[1px] right-[1px] p-[3px] 
          rounded-md bg-blue-400 text-gray-50 cursor-pointer hover:bg-blue-500 transition'>
            <BiSearchAlt2></BiSearchAlt2></div>
        </div>
      </div>
    </div>
  )
}

export default HomeLeftTopLogo