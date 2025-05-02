import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import Cart from '../components/Cart'

import Cart9 from '../assets/cart9.png'
import Cart10 from '../assets/cart10.png'
import Cart11 from '../assets/cart11.png'
import Cart12 from '../assets/cart12.png'

const SpecialOffer = () => {
  return (
    <section className='pt-[128px] pb-[140px]'>
        <Container>
        <SubHeading className='pb-12' text='Special Offers'/>
        <Flex className='justify-between'>
            <Cart image={Cart9} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
            <Cart image={Cart10} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
            <Cart image={Cart11} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
            <Cart image={Cart12} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
        </Flex>
        </Container>
    </section>
  )
}

export default SpecialOffer