import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'

import Offerimg1 from '../assets/offer1.jpg'
import Offerimg2 from '../assets/offer2.jpg'
import Offerimg3 from '../assets/offer3.jpg'

const Offers = () => {
  return (
    <section className='pt-[140px] pb-[128px]'>
        <Container>
           <Flex className='justify-between'>
            <div className='w-[49%]'>
                <Image className='w-full' src={Offerimg1}/>
            </div>
            <div className='w-[49%]'>
                <Image className='w-full pb-10' src={Offerimg2}/>
                <Image className='w-full' src={Offerimg3}/>
            </div>
           </Flex>
        </Container>
    </section>
  )
}

export default Offers