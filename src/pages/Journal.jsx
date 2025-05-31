import React from 'react'
import SubHeading from '../components/SubHeading'
import { useSelector } from 'react-redux'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const Journal = () => {
  let prev = useSelector((state)=> state.action.prevvalue)
  let current = useSelector((state)=> state.action.currentvalue)
  return (
    <section className='py-20'> 
      
      <Container>
        <SubHeading className='pb-2' text='Journal'/>
       
       <p>{prev && current!==prev && current === 'Journal' ? (<Link to={prev== "Home" ?'/':`/${prev}`}>{`${prev} >`}</Link>):null} Journal</p>
      </Container>
    </section>
  )
}

export default Journal