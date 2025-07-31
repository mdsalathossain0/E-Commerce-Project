import React from 'react'

const Footerlist = ({text, className}) => {
  return (
    <li className={`list-none text-xs lg:text-sm text-fourth font-normal font-san leading-6 ${className}`}>{text}</li>
  )
}

export default Footerlist