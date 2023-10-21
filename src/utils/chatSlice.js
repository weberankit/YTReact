import {createSlice} from "@reduxjs/toolkit"
import { OFFSET_LIVE_CHAT } from "./constant"
const chatSlice=createSlice({
    name:"chat",
    initialState:{
        message:[]
    },
    reducers:{
      addMessage:(state,action)=>{
        //deleting 1 (from top i.e not the recent msg)  after every 10 so page will not be explode
        if(state.message.length>17){
        state.message.splice(OFFSET_LIVE_CHAT,1)
    }
        
        //unshift-adding to begging so that new chat come from bottom
        state.message.push(action.payload)
      }
    }
})
export const{addMessage} = chatSlice.actions
export default chatSlice.reducer
