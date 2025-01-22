import React from 'react'
import logo from '@assets/icons/petPal-rbg.png';

export const FullScreenLoading = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center animate-pulse'>
        <div className='justify-center items-center flex flex-col -space-y-2'>
            <img src={logo} alt="loading" className='w-40 h-40' />
            <p className='font-extrabold text-4xl -ml-2 text-primary'>PetPal</p>
        </div>
    </div>
  )
}

export const Loading = () => {
    return (
        <div className='spinner border-t-red-500 animate-spin w-6 h-6'></div>
    )
}
