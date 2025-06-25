import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Cart from '../components/Cart'


import Cart1 from '../assets/cart1.png'
import Cart2 from '../assets/cart2.png'
import Cart3 from '../assets/cart3.png'
import Cart4 from '../assets/cart4.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import SampleNextArrow from '../components/SampleNextArrow'
import SamplePrevArrow from '../components/SamplePrevArrow'

const Newarival = () => {
   var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
  };
  return (
    <section className='pt-[128px] pb-[118px]'>
        <Container>
            <SubHeading className='pb-12' text='New Arrivals'/>
            
                
            <Slider {...settings}>
             <div>
               <Cart image={Cart1} title='Product one' price='44.00' color='black'/>
             </div>
             <div>
               <Cart image={Cart2} title='Product two' price='34.00' color='black'/>
             </div>
             <div>
               <Cart image={Cart3} title='Product three' price='24.00' color='black'/>
             </div>
             <div>
               <Cart image={Cart4} title='Product four' price='42.00' color='black'/>
             </div>
             <div>
               <Cart image={Cart1} title='Product five' price='14.00' color='black'/>
             </div>
             <div>
               <Cart image={Cart2} title='Product six' price='24.00' color='black'/>
             </div>
             <div>
               <Cart image={Cart3} title='Product one' price='34.00' color='black'/>
             </div>
             <div>
               <Cart image={Cart4} title='Product one' price='17.00' color='black'/>
             </div>

            </Slider>
           
        </Container>
    </section>
  )
}

export default Newarival