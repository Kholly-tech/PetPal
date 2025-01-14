import React from 'react'
import NotFoundImage from '@assets/images/404.svg'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <img src={NotFoundImage} alt="" className="w-3/4 " />
      <div className='my-4'>
        <Link
          to="/"
          className="bg-primary text-secondary font-bold py-2 px-4 rounded transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound