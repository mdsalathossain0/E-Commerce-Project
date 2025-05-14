import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import Cart from '../components/Cart'

import Cart5 from '../assets/cart5.png'
import Cart6 from '../assets/cart6.png'
import Cart7 from '../assets/cart7.png'
import Cart8 from '../assets/cart8.png'
import SampleNextArrow from '../components/SampleNextArrow'
import SamplePrevArrow from '../components/SamplePrevArrow'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";


const Bestseller = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
  };
  return (
    <section className='pt-[128px] pb-[130px]'>
        <Container>
            <SubHeading className='pb-12' text='Our Bestsellers'/>

            <Slider {...settings}>
             <div>
               <Cart image={Cart5} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
             </div>
             <div>
               <Cart image={Cart6} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
             </div>
             <div>
               <Cart image={Cart7} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
             </div>
             <div>
               <Cart image={Cart8} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
             </div>
             <div>
               <Cart image={Cart5} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
             </div>
             <div>
               <Cart image={Cart6} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
             </div>
             <div>
               <Cart image={Cart7} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
             </div>
             <div>
               <Cart image={Cart8} title='Basic Crew Neck Tee' price='$44.00' color='black'/>
             </div>

            </Slider>
        </Container>

    </section>
  )
}

export default Bestseller