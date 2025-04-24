import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import List from '../components/List'

import Logo from '../assets/logo1.png'

const Navber = () => {
  return (
    
    <nav className='py-8'>
        <Container>
            <Flex>
                <div className='w-5/12'>
                    <div><Image src={Logo}/></div>
                </div>
                <div className='w-7/12'>
                    <Flex className=' gap-x-10'>
                        <List text='Home'/>
                        <List text='Shop'/>
                        <List text='About'/>
                        <List text='Contacts'/>
                        <List text='Journal'/>
                    </Flex>
                </div>
            </Flex>
        </Container>
    </nav>

  )
}

export default Navber