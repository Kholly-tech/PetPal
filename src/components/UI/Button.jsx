import React from 'react'

const Button = ({loading = false, title, className, ...props}) => {
  return (
    <div>
        <button className={` ${className} ${loading? 'opacity-50 cursor-not-allowed': ''}`} 
        disabled={loading}
        {...props}>{loading ? <span className='spinner'></span>: title}</button>
    </div>
  )
}

export default Button