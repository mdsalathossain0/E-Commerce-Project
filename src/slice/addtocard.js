import { createSlice } from '@reduxjs/toolkit'

export const addtocard = createSlice({
  name: 'cart',
  initialState: {
    value: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  },
  reducers: {
    cartItem: (state,action) => {
        

     let alldata = state.value.find( item=> item.title === action.payload.title )

     if(alldata){
        alldata.quantity +=1
     }else{
         state.value.push({...action.payload, quantity:1})
     }
     localStorage.setItem("cart", JSON.stringify(state.value))
        
    },
    increment:(state,action)=>{
      state.value.map(item=>{
        if(item.title===action.payload.title){
          item.quantity+=1
        }
      })
      localStorage.setItem("cart", JSON.stringify(state.value))
    },
    decrement:(state, action)=>{
       state.value.map(item=>{
        if(item.title===action.payload.title){
          if(item.quantity>1){
            item.quantity-=1
          }
        }
      })
      localStorage.setItem("cart", JSON.stringify(state.value))
    },
    removeItem:(state,action)=>{
      state.value.map((item, index)=>{
        if(item.title==action.payload.title){
          state.value.splice(index, 1)
        }
      })
      localStorage.setItem("cart", JSON.stringify(state.value))
    }
  },
})


export const { cartItem, increment,decrement,removeItem} = addtocard.actions

export default addtocard.reducer