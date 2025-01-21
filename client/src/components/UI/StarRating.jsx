import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

const StarRating = ({ rating, totalStars = 5 }) => {
  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        if (starValue <= rating) {
          return <Icon key={index} icon="material-symbols:star" className="text-yellow-400 text-2xl" />;
        } else if (starValue - rating < 1) {
          return <Icon key={index} icon="material-symbols:star-half" className="text-yellow-400 text-2xl" />;
        }
        return <Icon key={index} icon="material-symbols:star" className="text-gray-300 text-2xl" />;
      })}
    </div>
  );
};

export default StarRating;
