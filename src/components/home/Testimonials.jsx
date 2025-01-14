import { useState } from 'react';
import ImageHolder from '../UI/ImageHolder';
import { Icon } from '@iconify/react/dist/iconify.js';


// Demo testimonial data
const testimonials = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    text: "Thanks to PetPal, we adopted our adorable dog, Bella. The staff was amazing and helped us prepare for bringing her home. Bella has been the perfect addition to our family, and we're so grateful!",
    author: "Mark & Lisa"
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    text: "PetPal made our adoption journey smooth and joyful. Our cat Whiskers has brought so much happiness to our home. The support team was incredible throughout the process!",
    author: "Sarah Johnson"
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    text: "We couldn't be happier with our experience at PetPal. They matched us perfectly with our dog Max. Their dedication to animal welfare is truly inspiring.",
    author: "David & Emma"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="mt-8 px-4 pb-4 md:px-8">
      <h1 className="text-primary text-2xl font-medium mb-6">What people say about us</h1>
      <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-4">
        <div className="w-20 h-20">
          <ImageHolder image={testimonials[currentIndex].image} />
        </div>
        <div className="flex-1 ">
          <div className="flex flex-col">
            <p className="text-center md:text-left mb-4">{testimonials[currentIndex].text}</p>
            <p className="text-center md:text-left font-medium">- {testimonials[currentIndex].author}</p>
          </div>
          <div className="flex justify-end mt-4">
            <button 
              onClick={handleNextTestimonial}
              className="w-11 h-11 rounded-full bg-[#D9D9D9] hover:bg-secondary transition-colors duration-300 flex items-center justify-center cursor-pointer"
            >
              <Icon icon="ic:outline-greater-than" width={32} height={52} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialSection;