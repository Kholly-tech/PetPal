import React from 'react'

const PopUp = ({children}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            {children}
        </div>
    </div>
  )
}

export default PopUp