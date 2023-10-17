
import {createSlice } from "@reduxjs/toolkit"
const filterSlice= createSlice({
    name:"filter",
    initialState:{
        callFunction:false,
        searchquery:"",
      
    },
    reducers:{
        tooglefuncSlice:(state,action)=>{
            state.callFunction = action.payload
        },
        storeSearchQuery:(state,action)=>{
            state.searchquery =action.payload 

        },
       
    



    }

})

export const {tooglefuncSlice,storeSearchQuery,sortedBtnsFlag,sorteddataStore} = filterSlice.actions
export default filterSlice.reducer


