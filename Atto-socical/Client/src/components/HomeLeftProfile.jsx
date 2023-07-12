import React from 'react'

const HomeLeftProfile = () => {
  return (
    <div className='w-[80%] flex justify-center items-center flex-col mt-7 px-1 py-5 
    bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-700 hover:to-blue-300 rounded-2xl	'>
      <div className='flex flex-col justify-center items-center mt-2'>
        <div className='w-[60%]'>        
          <img className='w-[100%] rounded-full'
          src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt=''></img>
        </div>
        <h4 className='mx-4 text-gray-50 font-bold text-[23px] mt-3'>Nguyễn Mạnh Tuấn</h4>
        <p className='text-gray-100'>No pain - No gain</p>
      </div>
      <div className='flex text-gray-50 mt-2'>
        <div className='flex flex-col items-center mr-3'>
          <span className='font-bold '>5000</span>
          <span className=' text-gray-200'>Following</span>
        </div>
        <div className='flex flex-col justify-center items-center ml-3'>
          <span className='font-bold'>3</span>
          <span className=' text-gray-200'>Follower</span>
        </div>
      </div>
      <div className='py-4 text-gray-100 text-[20px] font-semibold cursor-pointer'>
        <span>Thông tin của tôi</span>
      </div>
    </div>
  )
}

export default HomeLeftProfile