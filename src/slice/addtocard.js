import { createSlice } from '@reduxjs/toolkit'

export const addtocard = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    cartItem: (state,action) => {
        

     let alldata=   state.value.find(item=> item.title === action.payload.title )

     if(alldata){
        alldata.quantity +=1
     }else{
         state.value.push({...action.payload, quantity:1})
     }
        
    },
  },
})


export const { cartItem} = addtocard.actions

export default addtocard.reducer