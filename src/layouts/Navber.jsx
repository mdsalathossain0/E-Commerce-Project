import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import List from '../components/List'

import Logo from '../assets/logo1.png'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    
    <nav className='py-8'>
        <Container>
            <Flex>
                <div className='w-5/12'>
                    <Link to='/'><div><Image src={Logo}/></div></Link>
                </div>
                <div className='w-7/12'>
                    <Flex className=' gap-x-10'>
                        <Link to='/'><List text='Home'/></Link>
                        <Link to='/shop'><List text='Shop'/></Link>
                        <Link to='/about'><List text='About'/></Link>
                        <Link to='/contact'><List text='Contacts'/></Link>
                        <Link to='/journal'><List text='Journal'/></Link>
                        
                        
                        
                        
                    </Flex>
                </div>
            </Flex>
        </Container>
    </nav>

  )
}

export default Navber