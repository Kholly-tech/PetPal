import React from 'react'

const PetGallery = ({petImages}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 w-full">
        {petImages.map((pet, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden">
                <img 
                    src={pet.url} 
                    alt={pet.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
            </div>
        ))}
    </div>
  )
}

export default PetGallery
