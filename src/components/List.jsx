import React from 'react'

const List = ({text, className}) => {
  return (
    <li className={`list-none text-sm text-first font-normal font-san hover:font-bold hover:text-second duration-400 ${className}`}>{text}</li>
  )
}

export default List