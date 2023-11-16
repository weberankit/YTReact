import { useState } from "react"
import { useDispatch } from "react-redux"
import { storeSearchQuery,tooglefuncSlice } from "../utils/filterSlice"

const Button=({name,showItem,setbgColor,index})=>{

const dispatch=useDispatch()
       return(
      <div>

{
 <button  
  onClick={()=>{
   setbgColor()
  name==="All"?dispatch(storeSearchQuery("")):dispatch(storeSearchQuery(name));
   
   dispatch(tooglefuncSlice(true))
}
}
className={showItem ? "bg-black text-white  p-2 text-1xl m-2    sm:px-5 sm:py-2 sm:m-1 rounded-md shadow-lg  ":"bg-gray-100   p-2 text-1xl m-2  sm:px-5 sm:py-2 sm:m-1 rounded-md shadow-lg "}
   
    >{name}</button>
}




 </div>
    )
}





export default Button;



