import {createSlice, current} from "@reduxjs/toolkit"
import { commentData } from "./helper"
//import { OFFSET_LIVE_CHAT } from "./constant"



function filterNestedComments(comments, id , item) {
  
  
    for (const comment of comments) {
      if (comment.id === id) {
  
        comment.replies.push(item)
      } else {
        const filteredReplies = filterNestedComments(comment.replies, id , item);
     
      }
    }
  
   
  }
  

//console.log(filterNestedComments(commentData,"A1"),"BEAWRW",commentData)





const chatSlice=createSlice({
    name:"comment",
    initialState:{
        commentData:commentData
    },
    reducers:{
      addComment:(state,action)=>{
      state.commentData.unshift(action.payload)
       },

       replyComment:(state,action)=>{
     //   state.commentData.push(action.payload)
        console.log(action.payload.id,action.payload)

      
    filterNestedComments(state.commentData,action.payload.id ,action.payload)
   // console.log(state.commentData,"Checkoutthis one")
       }




    }
    })

export const{addComment,replyComment} = chatSlice.actions
export default chatSlice.reducer
