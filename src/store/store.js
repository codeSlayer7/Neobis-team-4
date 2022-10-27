import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import googleReducer from './googleSlice'


const store = configureStore({
  reducer: {
    user: userReducer,
    google:googleReducer,
  },
})

export default store;