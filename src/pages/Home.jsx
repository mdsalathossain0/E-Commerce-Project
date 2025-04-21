import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'

import Icon from '../assets/react.svg'

const Home = () => {
  return (
    <Container>
      <Flex className='gap-x-[300px]'>
        <div>idjhidshji</div>
        <div>idjhidshji</div>
        <div>idjhidshji</div>
        <div>idjhidshji</div>
      </Flex>
      <Image className='w-[500px]' src={Icon}/>
    </Container>
    
  )
}

export default Home