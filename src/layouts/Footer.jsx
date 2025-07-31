import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Footerlist from '../components/Footerlist'
import Image from '../components/Image'

import Logo from '../assets/logofooter.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-third py-14 px-5 '>
        <Container>
            <Flex className='flex-col lg:flex-row gap-y-10 lg:gap-y-0'>
                <div className='w-full lg:w-2/12'>
                <h6 className='text-sm lg:text-base text-second font-bold font-san leading-6 pb-4'>MENU</h6>
                 <Flex className='flex-col gap-y-[6px]'>
                 <Footerlist text='Home'/>
                 <Footerlist text='Shop'/>
                 <Footerlist text='About'/>
                 <Footerlist text='Contact'/>
                 <Footerlist text='Journal'/>
                 </Flex>
                </div>
                <div className='w-full lg:w-2/12'>
                <h6 className='text-sm lg:text-base text-second font-bold font-san leading-6 pb-4'>SHOP</h6>
                 <Flex className='flex-col gap-y-[6px]'>
                 <Footerlist text='Category 1'/>
                 <Footerlist text='Category 2'/>
                 <Footerlist text='Category 3'/>
                 <Footerlist text='Category 4'/>
                 <Footerlist text='Category 5'/>
                 </Flex>
                </div>
                <div className='w-full lg:w-2/12'>
                <h6 className='text-sm lg:text-base text-second font-bold font-san leading-6 pb-4'>HELP</h6>
                 <Flex className='flex-col gap-y-[6px]'>
                 <Footerlist text='Privacy Policy'/>
                 <Footerlist text='Terms & Conditions'/>
                 <Footerlist text='Special E-shop'/>
                 <Footerlist text='Shipping'/>
                 <Footerlist text='Secure Payments'/>
                 </Flex>
                </div>
                <div className='w-full lg:w-3/12'>
                    <h6 className='text-sm lg:text-base text-second font-bold font-san leading-7'>(052) 611-5711</h6>
                    <h6 className='text-sm lg:text-base text-second font-bold font-san leading-7'>company@domain.com</h6>
                    <p className='text-xs lg:text-sm text-fourth font-normal font-san leading-6 pt-4'>575 Crescent Ave. Quakertown, PA 18951</p>
                </div>
                <div className='w-3/12'>
                
                <div className='w-[90px] lg:w-[122px] h-[20px] lg:h-[30px]'><Image className='w-full h-full' src={Logo}/> </div>
                </div>
            </Flex>
            <Flex className='lg:justify-between pt-16 flex-col lg:flex-row gap-y-8 lg:gap-y-10'>
                <div>
                    <Flex className='gap-x-6'>
                    <FaFacebookF />
                    <FaLinkedinIn />
                    <FaInstagram />


                    </Flex>
                </div>
                <div>
                    <p className='text-xs lg:text-sm text-fourth font-normal font-san leading-6'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                </div>
            </Flex>
        </Container>
    </footer>
  )
}

export default Footer