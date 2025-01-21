import React from 'react'
import PetGallery from '@components/home/PetGallery'
import { petImages } from '@assets/DemoData/DemoPets'


const Gallery = () => {
  return (
    <section className='bg-bg '>
      <div className="max-w-full mx-1 md:mx-5 bg-bg">
          <h1 className='text-4xl font-semibold p-2'>Gallery</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 py-1 w-full">
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
    </section>
  )
}

export default Gallery
