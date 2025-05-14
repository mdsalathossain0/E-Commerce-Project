import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import Cart from '../components/Cart'

import Cart9 from '../assets/cart9.png'
import Cart10 from '../assets/cart10.png'
import Cart11 from '../assets/cart11.png'
import Cart12 from '../assets/cart12.png'
import SampleNextArrow from '../components/SampleNextArrow'
import SamplePrevArrow from '../components/SamplePrevArrow'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";

const SpecialOffer = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
  };
  return (
    <section className='pt-[128px] pb-[140px]'>
        <Container>
        <SubHeading className='pb-12' text='Special Offers'/>
        <Slider {...settings}>
             <div>
               <Cart image={Cart9} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
             </div>
             <div>
               <Cart image={Cart10} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
             </div>
             <div>
               <Cart image={Cart11} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
             </div>
             <div>
               <Cart image={Cart12} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
             </div>
             <div>
               <Cart image={Cart9} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
             </div>
             <div>
               <Cart image={Cart10} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
             </div>
             <div>
               <Cart image={Cart11} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
             </div>
             <div>
               <Cart image={Cart12} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
             </div>

            </Slider>
        </Container>
    </section>
  )
}

export default SpecialOffer