import {createSlice} from "@reduxjs/toolkit"
//here initialState object is used because search in object time complexities is O(1) and for array O(n) so object
const searchSlice = createSlice({
 name:"searching",

 initialState:{

 },
 reducers:{
    cacheResults:(state,action)=>{
    state={ ...action.payload ,  ...state }
    }
 }

})

export const{cacheResults} =searchSlice.actions
export default searchSlice.reducer