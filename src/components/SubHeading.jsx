import React from 'react'

const SunHeading = ({text, className}) => {
  return (
    <h3 className={`text-2xl md:text-28 lg:text-[39px] text-second font-bold font-san ${className}`}>{text}</h3>
  )
}

export default SunHeading