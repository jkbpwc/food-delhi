import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-20' id='mobile-app'>
      <span className='text-[60px] text-center font-medium'>For Better Experience Download<br/> Tomato app</span>
      <div className='flex flex-row mt-4 gap-6'>
        <img className=" hover:cursor-pointer hover:shadow-2xl" src={assets.app_store}/>
        <img className=" hover:cursor-pointer hover:shadow-2xl" src={assets.play_store}/>
      </div>
    </div>
  )
}

export default AppDownload
