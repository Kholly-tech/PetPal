import React from 'react'

export const Input = ({ placeholder, type, label, name, id, value, onChange, required, error, className }) => {
  return (
    <div className="mb-2">
      {label && <div className="">{label}</div>}

      <div
        className={`bg-transparent border border-[#c9c5c5] text-white text-sm ${className}`}
      >
        <input
          type={type || "text"}
          className='focus:outline-none focus:ring-0 rounded-lg bg-transparent w-full resize-none'
          placeholder={placeholder}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          required={required}
        />
      </div>
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
}