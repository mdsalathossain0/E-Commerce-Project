import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import List from '../components/List'

import Logo from '../assets/logo1.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { breadbutton } from '../slice/breadcrum'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { AiOutlineClose } from 'react-icons/ai'

const Navber = () => {
    let [show, setShow]=useState(false)
    let dispatch = useDispatch()

    let handleClick= (item)=>{
        dispatch(breadbutton(item))
    }
    let handleShow =()=>{
        setShow(!show)
    }
  return (
   <>
    {/*  dekstop  */}
    <nav className='py-8 hidden lg:block px-5'>
        <Container>
            <Flex>
                <div className='w-5/12'>
                    <Link to='/'><div><Image src={Logo}/></div></Link>
                </div>
                <div className='w-7/12'>
                    <Flex className=' gap-x-10'>
                        <Link onClick={()=>handleClick("Home")} to='/'><List text='Home'/></Link>
                        <Link onClick={()=>handleClick("Shop")} to='/shop'><List text='Shop'/></Link>
                        <Link onClick={()=>handleClick("About")} to='/about'><List text='About'/></Link>
                        <Link onClick={()=>handleClick("Contact")} to='/contact'><List text='Contacts'/></Link>
                        <Link onClick={()=>handleClick("Journal")} to='/journal'><List text='Journal'/></Link>

                    </Flex>
                </div>
            </Flex>
        </Container>
    </nav>
{/* mobile device */}
    <nav className='py-5 lg:hidden'>
        <div className='flex justify-between mx-5'>
            <div onClick={handleShow}> {
                show ?
                <AiOutlineClose className='text-base text-first font-normal font-san'/> : <HiOutlineBars3 className='text-base text-first font-normal font-san'/>
            }
            {
                show && 
                
                <div className='pt-8 flex flex-col gap-y-5 absolute bg-white w-[30%] h-[240px] z-20 left-0 pl-5'> 
                    <Link onClick={()=>handleClick("Home")} to='/'><List text='Home'/></Link>
                        <Link onClick={()=>handleClick("Shop")} to='/shop'><List text='Shop'/></Link>
                        <Link onClick={()=>handleClick("About")} to='/about'><List text='About'/></Link>
                        <Link onClick={()=>handleClick("Contact")} to='/contact'><List text='Contacts'/></Link>
                        <Link onClick={()=>handleClick("Journal")} to='/journal'><List text='Journal'/></Link>
                </div>
            }
            </div>
            <div><Link to='/'><div><Image src={Logo}/></div></Link></div>
        </div>
    </nav>
   </>

  )
}

export default Navber