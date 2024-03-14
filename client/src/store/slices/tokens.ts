import { createSlice, PayloadAction,createAsyncThunk } from '@reduxjs/toolkit'


interface token{
    accessToken:string
}


const initialState:token = {
    accessToken:""
}

export const tokensSlice = createSlice({
    name:"tokens",
    initialState,
    reducers:{
        addAccessToken: (state,actions:PayloadAction<{accessToken:string}>)=>{
            state.accessToken = actions.payload.accessToken
        },
        removeAccessToken: (state,actions)=>{
            state.accessToken = ""
        }
    },
})


export const {addAccessToken,removeAccessToken} = tokensSlice.actions

export default tokensSlice.reducer