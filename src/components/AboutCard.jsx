import React from 'react'

const AboutCard = ({title, text}) => {
  return (
    <div>
        <h5 className='text-xxl text-second font-bold font-san leading-9'>{title}</h5>
        <p className='w-full lg:w-[400px] text-sm lg:text-base text-first font-normal font-san leading-8'>{text}</p>
    </div>
  )
}

export default AboutCard