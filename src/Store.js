import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../src/slice/counterSlice'
import  breadcrum  from './slice/breadcrum'

export default configureStore({
  reducer: {
        counter: counterSlice,
        action: breadcrum,
  },
})