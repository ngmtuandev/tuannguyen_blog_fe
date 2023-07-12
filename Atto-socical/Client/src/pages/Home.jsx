import React from 'react'
import HomeLeftPortfolio from '../components/HomeLeftPortfolio'
const Home = () => {
  return (
    <div className='grid grid-cols-3 pt-3 px-3'>
        <HomeLeftPortfolio></HomeLeftPortfolio>
        <div>CENTER</div>
        <div>RIGHT</div>
    </div>
  )
}

export default Home