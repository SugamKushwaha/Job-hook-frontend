import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import userReduser from "./slices/UserSlice"

export default configureStore({
    reducer:{
        user:userReduser
    }
})