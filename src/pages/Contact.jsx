import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import Input from '../components/Input'
import Button from '../components/Button'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Contact = () => {
  let prev = useSelector((state)=>state.action.prevvalue)
  let current = useSelector((state)=>state.action.currentvalue)
  return (
    <section className='py-26'>
      <Container>
        <SubHeading text='Contacts'/>
      <p className='text-sm text-first font-normal font-san pb-[136px]'>
        {prev && current!==prev && current === 'Contact' ? (<Link to={prev === "Home" ? "/" : `/${prev}`}>{`${prev} >`}</Link>) :null}
          Contact</p>
     <h4 className='text-[39px] text-second font-bold font-san'>Fill up a Form</h4>
     <Input className='w-w49' text='Name' placeholder='Your name here' type='text' check='name'/>
     <Input className='w-w49' text='Email' placeholder='Your email here' type='email' check='email'/>
     <Input className='w-w49' text='Message' placeholder='Your message here' type='textarea' check='message'/>
     <div className='pt-8 pb-30'>
      <Button text='Post'/>
     </div>
     <div className='w-full h-[572px] '>
      <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.4209976756924!2d90.77486367412523!3d24.436174862106363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375692248772eadb%3A0x8bbf4034c8ad579a!2sKishoreganj%20District%20Public%20School%20and%20College!5e0!3m2!1sen!2sbd!4v1747043709852!5m2!1sen!2sbd"></iframe>
     </div>
      </Container>
    </section>
  )
}

export default Contact