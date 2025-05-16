import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slice/counterSlice'

const Shop = () => {
  let dispatch = useDispatch()
  let data = useSelector((state)=>state.counter.value)

  let handleCLick=()=>{
    dispatch(increment(1))
  }

  return (
    <div>
      
      <button onClick={handleCLick}>Increment</button>
      <h1>{data}</h1>
    </div>
  )
}

export default Shop