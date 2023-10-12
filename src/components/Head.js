//import React from "react"
import {useDispatch, useSelector} from "react-redux"
import { toogleSlice } from "../utils/appSlice"; 
import {useState,useEffect} from "react"
import { YOUTUBE_Search_API } from "../utils/constant";
//import {useSelector} from "react-redux"
import { cacheResults } from "../utils/searchSlice";
const Head=()=>{
const dispatch = useDispatch();
const toggleMenuHandler = ()=>{
    dispatch(toogleSlice())
    
}
const [searchQuery , setSearchQuery]  = useState("")
const [suggestion , setSuggestion] =useState([])
const [showSuggestion , setShowSuggestion] = useState(false)

console.log(searchQuery)

//subscribing to the store
const searchCache=useSelector((store)=>store.search)
console.log(searchCache)

/*
searchCache={
  "iphone":["iphone11" ,"iphone12"]
}

searchQuery = iphone
*/



useEffect(()=>{
    
    //console.log(searchQuery+"ji")
     //getSearchsuggestion()
  // debouncing 
  //calling api on differnce of keystroke 200ms

   const timer=  setTimeout(()=>{
    //already present then directly set suggestion no need to call api
    if(searchCache[searchQuery]){
      setSuggestion(searchCache[searchQuery])
    //  console.log(searchCache[searchQuery])
    }else{
      getSearchsuggestion()
    }


},200)

     //when reconocillation or page refresh
     //most imp stroke timme less 200ms  remove that  setTimeout

     return()=>{
        clearTimeout(timer)
     }

},[searchQuery])

const getSearchsuggestion= async()=>{
  const data= await fetch(YOUTUBE_Search_API+searchQuery)
  const json=await data.json()

  //console.log(json)
  setSuggestion(json[1])

  //dispatch
  //used searchquery as key beacuse YT Api result based on searchquery
  dispatch(cacheResults({
    [searchQuery] : json[1],
  }))
}



    return(

<div className="grid grid-flow-col p-5 m-2 shadow-lg">

    <div className="flex col-span-1 ">
    <img className="h-8 cursor-pointer" onClick={()=>toggleMenuHandler()} alt="menu" src="https://www.svgrepo.com/show/506800/burger-menu.svg"/>
   <a href="/"> <img className="h-16 mx-4" alt ="youtube logo" src="https://www.svgrepo.com/show/354594/youtube.svg" />
   </a> 
    </div>
    <div>
    <div className="col-span-10 px-10">
    <input className="w-1/2 border border-gray-400 p-2  rounded-l-full"  type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} 
    onFocus={()=>setShowSuggestion(true)}
    onBlur={()=>setShowSuggestion(false)}
    />
    <button className="border border-gray-400 p-2 rounded-r-full">Search</button>
    </div>
  <div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-md border border-gray-100">
    <ul>

     {showSuggestion && suggestion.map((item)=>{
        return  (
        <li key={item} className="py-2 shadow-sm">{item}</li>)
     })}
    </ul>
  </div>


    </div>


    <div  className="col-span-1 text-center" >
    <img className="h-8" alt="user-icon" src="https://www.svgrepo.com/show/525577/user-circle.svg"/>
    </div>


</div>
    )
}
export default Head