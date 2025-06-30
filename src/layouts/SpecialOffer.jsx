import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import Cart from '../components/Cart'

import "slick-carousel/slick/slick.css";
import axios from 'axios'

const SpecialOffer = () => {

  let [allitem, setAllitem]=useState([])
  useEffect(()=>{
   async function allData(){

      let data =await axios.get('https://dummyjson.com/products')
      setAllitem(data.data.products)
    }
    allData()
  },[])
 
  return (
    <section className='pt-[128px] pb-[140px]'>
        <Container>
        <SubHeading className='pb-12' text='Special Offers'/>
        
              <Flex className='gap-x-[45px]'>
                 {
                  allitem.map((item,index)=>(
                    index>=8 && index<=11 &&
                    <Cart image={item.thumbnail} title={item.title} price={item.price} color='black' offer={item.discountPercentage}/>
                  ))
                 }
              </Flex>
             
        </Container>
    </section>
  )
}

export default SpecialOffer