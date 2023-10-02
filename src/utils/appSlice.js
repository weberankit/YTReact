import {createSlice} from "@reduxjs/toolkit"


const appSlice=createSlice({
name:"app",
initialState:{
    isMenuOpen:true
},
reducers:{
    toogleSlice:(state)=>{
        state.isMenuOpen = !state.isMenuOpen
    }
}

})

export const {toogleSlice} = appSlice.actions
export default appSlice.reducer