import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`text-sm text-white font-bold font-san bg-second py-4 px-10 border border-transparent hover:text-second hover:bg-transparent hover:border-second duration-300 ${className}`}>{text}</button>
  )
}

export default Button