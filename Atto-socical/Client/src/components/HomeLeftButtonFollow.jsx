import React from 'react'
import { followers } from '../asset/dataFollower'
import ButtonStyle from './ButtonStyle'

const HomeLeftButtonFollow = () => {
  return (
    <div className='mt-6'>
      {
        followers.map(item => (
          <div className='flex items-center my-7'>
            <div className='mr-6'>
              <img className='rounded-full w-[70px] object-cover h-[70px]' src={item.img}></img></div>
            <div className='flex flex-col text-gray-100'>
              <span>{item.name}</span>
              <span>{item.user}</span>
            </div>
            <div className='ml-8'><ButtonStyle title='Ahihi'></ButtonStyle></div>
          </div>
        ))
      }
    </div>
  )
}

export default HomeLeftButtonFollow