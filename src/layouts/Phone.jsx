import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'

import Phoneimg from '../assets/phone.png'

const Phone = () => {
  return (
    <section className='px-5'>
        <Container>
            <div>
                <Image src={Phoneimg}/>
            </div>
        </Container>
    </section>
  )
}

export default Phone