import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    value: false,
  },
  reducers: {
    categoryFunction: (state,action) => {
        state.value=action.payload
        
    },
  },
})


export const { categoryFunction} = categorySlice.actions

export default categorySlice.reducer