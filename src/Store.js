import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../src/slice/counterSlice'

export default configureStore({
  reducer: {
        counter: counterSlice,
  },
})