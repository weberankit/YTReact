//import React from "react"
import {useDispatch} from "react-redux"
import { toogleSlice } from "../utils/appSlice"; 
const Head=()=>{
const dispatch = useDispatch();
const toggleMenuHandler = ()=>{
    dispatch(toogleSlice())
}

    return(

<div className="grid grid-flow-col p-5 m-2 shadow-lg">

    <div className="flex col-span-1 ">
    <img className="h-8 cursor-pointer" onClick={()=>toggleMenuHandler()} alt="menu" src="https://www.svgrepo.com/show/506800/burger-menu.svg"/>
   <a href="/"> <img className="h-16 mx-4" alt ="youtube logo" src="https://www.svgrepo.com/show/354594/youtube.svg" />
   </a> 
    </div>

    <div className="col-span-10 px-10">
    <input className="w-1/2 border border-gray-400 p-2  rounded-l-full"  type="text"/>
    <button className="border border-gray-400 p-2 rounded-r-full">Search</button>
    </div>
    
    <div  className="col-span-1 text-center" >
    <img className="h-8" alt="user-icon" src="https://www.svgrepo.com/show/525577/user-circle.svg"/>
    </div>


</div>
    )
}
export default Head