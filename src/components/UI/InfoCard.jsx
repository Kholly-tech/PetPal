import React from 'react'
import { InlineIcon } from '@iconify/react/dist/iconify.js';

const SuccessCard = ({title, loading, success=true, description, onClose}) => {
  return (
    <div className="flex relative flex-col items-center justify-center p-4 sm:p-10 bg-white rounded-[10px] w-full max-w-[550px] min-h-[300px]">
      <button
        disabled={loading}
        onClick={onClose}
        className="absolute top-2 right-2 w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] opacity-45 hover:opacity-100 flex items-center justify-center bg-gray-900 rounded-full"
      >
        <InlineIcon
          icon="material-symbols:close"
          className="text-white"
        />
      </button>
      <div>
        <InlineIcon
          className={`text-[60px] sm:text-[100px] ${success ? 'text-green-500' : 'text-red-500'}`}
          icon={`${success ? "clarity:success-standard-line": "clarity:error-standard-line"}`}
        />
      </div>
      <div className="text-[20px] sm:text-[25px] mt-2 text-center">
        {title && title}
      </div>
      <div className="text-sm sm:text-base text-center text-gray-400 mt-1">
        {description && description}
      </div>
    </div>
  );
}

export default SuccessCard