import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'

import Offerimg1 from '../assets/offer1.jpg'
import Offerimg2 from '../assets/offer2.jpg'
import Offerimg3 from '../assets/offer3.jpg'

const Offers = () => {
  return (
    <section className= 'pt-15 lg:pt-[140px] pb-8 lg:pb-[70px] '>
        <Container>
           <Flex className='justify-between'>
            <div className='w-[49%] h-[400px]'>
                <Image className='w-full h-full' src={Offerimg1}/>
            </div>
            <div className='w-[49%] h-[400px]'>
                <Image className='w-full h-[200px] pb-2 lg:pb-9' src={Offerimg2}/>
                <Image className='w-full h-[200px]' src={Offerimg3}/>
            </div>
           </Flex>
        </Container>
    </section>
  )
}

export default Offers