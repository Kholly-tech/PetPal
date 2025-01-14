import React from 'react'

const ImageHolder = ({image}) => {
  return (
    <div className='w-full h-full rounded-full bg-primary'>
      <img src={image} alt="picture" className='w-full h-full object-cover rounded-full' />
    </div>
  )
}

export default ImageHolder