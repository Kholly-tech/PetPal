import React from 'react'
import PetGallery from '@components/home/PetGallery'
import { petImages } from '@assets/DemoData/DemoPets'


const Gallery = () => {
  return (
    <div className="max-w-full mx-1 md:mx-5 my-1">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 w-full">
        {petImages.map((pet, index) => (
            <div key={index} className="aspect-square overflow-hidden">
                <img 
                    src={pet.url} 
                    alt={pet.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
            </div>
        ))}
    </div>
    </div>
  )
}

export default Gallery
