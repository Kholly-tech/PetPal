import React from 'react'

const Button = ({onClick, type, loading = false, title, className, ...props}) => {
  return (
    <div>
        <button className={` ${className} ${loading? 'opacity-50 cursor-not-allowed': ''}`} 
        disabled={loading}
        onClick={onClick}
        type={type}
        {...props}>{loading ? <span className='spinner'></span>: title}</button>
    </div>
  )
}

export default Button