import { configureStore } from '@reduxjs/toolkit'
import tokensSlice from "./slices/tokens"
import {authApi} from "./api/authApi"
const store = configureStore({
    reducer:{
        "tokens": tokensSlice,
        [authApi.reducerPath]: authApi.reducer 
    },
     middleware: (getDefaultMiddleware)=> getDefaultMiddleware({}).concat([authApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store