import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../src/slice/counterSlice'
import  breadcrum  from './slice/breadcrum'
import  categorySlice  from './slice/categorySlice'

export default configureStore({
  reducer: {
        counter: counterSlice,
        action: breadcrum,
        category:categorySlice,
  },
})