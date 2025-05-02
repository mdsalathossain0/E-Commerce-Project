import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import Cart from '../components/Cart'

import Cart1 from '../assets/cart1.png'
import Cart2 from '../assets/cart2.png'
import Cart3 from '../assets/cart3.png'
import Cart4 from '../assets/cart4.png'
const Newarival = () => {
  return (
    <section className='pt-[128px] pb-[118px]'>
        <Container>
            <SubHeading className='pb-12' text='New Arrivals'/>
            <Flex className='justify-between'>
                <Cart image={Cart1} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
                <Cart image={Cart2} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
                <Cart image={Cart3} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
                <Cart image={Cart4} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
            </Flex>
        </Container>
    </section>
  )
}

export default Newarival