import {createSlice} from "@reduxjs/toolkit"
//here initialState object is used because search in object time complexities is O(1) and for array O(n) so object
const searchSlice = createSlice({
 name:"searching",

 initialState:{

 },
 reducers:{
    cacheResults:(state,action)=>{

    //state={ ...state , ...action.payload}// this not working don't know why
    //use older way merging two objects
    state=Object.assign(state, action.payload)
    }
 }

})

export const{cacheResults} =searchSlice.actions
export default searchSlice.reducer