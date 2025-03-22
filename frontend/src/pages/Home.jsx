import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='bg-red-400 h-screen flex justify-between flex-col w-full'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" className='h-30' />
        <div className='bg-white'>
          <h2>Get Started with Uber</h2>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Home