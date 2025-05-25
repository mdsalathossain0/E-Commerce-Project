import { createSlice } from '@reduxjs/toolkit'

export const breadcrum = createSlice({
  name: 'bread',
  initialState: {
    prevvalue: null,
    currentvalue: null,
  },
  reducers: {
    breadbutton: (state,action) => {
        if(state.currentvalue !== action.payload){
          state.prevvalue=state.currentvalue
        state.currentvalue=action.payload
        }
        
    },
  },
})

// Action creators are generated for each case reducer function
export const { breadbutton} = breadcrum.actions

export default breadcrum.reducer