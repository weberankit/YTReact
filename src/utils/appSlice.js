
import {createSlice } from "@reduxjs/toolkit"
const appSlice= createSlice({
    name:"app",
    initialState:{
        isMenuopen:true,
    },
    reducers:{
        toogleSlice:(state)=>{
            state.isMenuopen = !state.isMenuopen
        },
        closeMenu:(state)=>{
            state.isMenuopen = false
        }
    }

})

export const {toogleSlice,closeMenu} = appSlice.actions
export default appSlice.reducer

















//practising redux toolkit
/* 
import {createSlice } from "@redux/toolkit"
const appSlice= createlice({
    name:"app",
    initialState:{
        isopen:true
    },
    reducers:{
        toogle:(state)=>{
            state.isopen = !stte.isopen
        }
    }

})

export const {toogle} = appslice.actions
export default appslice.reducer
import app from"slicedirectoryfile
import {configureStore} from "@redux/toolkit"
const store=configureStore({
    
    reducer:{
     app:appSlice
    }
})




dispatch action
import {usedispatch} from "react-redux"
import {toogle} from  file
const dispatch=usedispatch()
const toogleHandler=()=>{
    dispatch(toodle())
}
<div onClick={()=>toogleHandler()))}></div>

import {useSelector} from "react-redux"
const subs=useSelector(item=>item.app.isopen)


*/