import React from 'react';
import { Link } from 'react-router-dom';


const ComingSoon = () => {
  return (
    <div className="w-screen h-[100svh] bg-gray-50 flex flex-col">
      {/* <div className="p-5">
        <img src={skopoosLogo} className="h-[40px]" alt="Skoopoos Logo" />
      </div> */}
      
      <div className="flex-grow flex flex-col items-center justify-center px-5">
      <h1 className="text-4xl lg:text-5xl md:text-5xl font-bold animate-pulse">
            Coming Soon
        </h1>
      <div className="mt-2 mb-5">
          <div className="shadow w-screen bg-white mt-2 max-w-[300px] sm:max-w-[350px] mx-auto rounded-full">
              <div className="rounded-full bg-primary text-xs leading-none text-center text-white py-1 w-3/4">75%</div>
          </div>
      </div>
        
        <div className="text-center text-gray-500 mb-8 max-w-md">
        We're working hard to bring you something amazing. Stay tuned!
        </div>
        <div className='my-4'>
            <Link
                to="/"
                className="bg-primary text-secondary font-bold py-2 px-4 rounded transition duration-300"
            >
                Go Back Home
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
