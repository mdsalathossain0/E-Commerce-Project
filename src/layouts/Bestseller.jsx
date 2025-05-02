import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import Cart from '../components/Cart'

import Cart5 from '../assets/cart5.png'
import Cart6 from '../assets/cart6.png'
import Cart7 from '../assets/cart7.png'
import Cart8 from '../assets/cart8.png'


const Bestseller = () => {
  return (
    <section className='pt-[128px] pb-[130px]'>
        <Container>
            <SubHeading className='pb-12' text='Our Bestsellers'/>

            <Flex className='justify-between'>
                <Cart image={Cart5} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
                <Cart image={Cart6} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
                <Cart image={Cart7} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
                <Cart image={Cart8} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
            </Flex>
        </Container>

    </section>
  )
}

export default Bestseller