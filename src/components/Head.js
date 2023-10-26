

//import React from "react"
import {useDispatch, useSelector} from "react-redux"
import { toogleSlice,closeMenu } from "../utils/appSlice"; 
import {useState,useEffect} from "react"
import { YOUTUBE_Search_API } from "../utils/constant";
//import {useSelector} from "react-redux"
import { cacheResults } from "../utils/searchSlice";
//import {Link} from "react-router-dom"
import { storeSearchQuery ,tooglefuncSlice} from "../utils/filterSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faSearch, faUser, faVideo} from '@fortawesome/free-solid-svg-icons';





const Head=()=>{
const dispatch = useDispatch();

if(window.screen.width<600){
  dispatch(closeMenu())
}




let flag=true


function screenSize(){
  
  if(window.screen.width<600){
   flag=false
  }
}
screenSize()


const toggleMenuHandler = ()=>{
    dispatch(toogleSlice())
    
}
const [searchQuery , setSearchQuery]  = useState("")
const [suggestion , setSuggestion] =useState([])


//console.log(searchQuery,suggestion,"suggestion")

//subscribing to the store
const searchCache=useSelector((store)=>store.search)
//console.log(searchCache)

/*
searchCache={
  "iphone":["iphone11" ,"iphone12"]
}

searchQuery = iphone
*/

const [hideIcon , setHideIcon]=useState(true)
//console.log(hideIcon,"hideicon")
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




//disable suggestion on click anywhere in doucment
useEffect(() => {
  const closeSuggestionBox = () => {
    setSuggestion([]);
   
  };

  // Add a click event listener to the document to close the suggestions on outside click
  document.addEventListener("click", closeSuggestionBox);

  // Remove the click event listener when the component unmounts
  return () => {
    document.removeEventListener("click", closeSuggestionBox);
  };
}, []);


//console.log(Math.random())

    return(
<div className="fixed w-full bg-white  z-20">
<div className=" flex flex-col    sm:grid sm:grid-flow-col p-5 m-2 shadow-lg ">
{
  hideIcon &&  <div className="flex col-span-1 ">
    <img className="h-8 cursor-pointer" onClick={()=>toggleMenuHandler()} alt="menu" src="https://www.svgrepo.com/show/506800/burger-menu.svg"/>
   <a href="/"> <img className="h-8 mx-4" alt ="youtube logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzg_LCf5ZahVQ42WRFD0PS3TNrpdOhqvckaO6-xgyo7kmVo5KW2EV6CEUakyaSGdmxqw&usqp=CAU" />
   </a> 
    </div>
}

    <div>
    <div className="col-span-12 px-10">
    <input className={" w-5/6 border border-gray-400 p-1  rounded-l-full"} type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} 
    onFocus={()=>setHideIcon(false)}
    onBlur={()=>setHideIcon(true)}
    />
    <button className="border border-gray-400 p-1 rounded-r-full" onClick={()=>{
      dispatch(storeSearchQuery(searchQuery))
      dispatch(tooglefuncSlice(true))
      setSuggestion([])
      }}><FontAwesomeIcon icon={faSearch} className="text-gray-700"/></button>
    </div>



  <div className="fixed bg-white py-2 px-5 w-[32rem] shadow-lg rounded-md border border-gray-100">
    <ul>

     {suggestion.map((item)=>{
        return  (
        <li onClick={()=>{
       //   setSearchQuery(item)
          dispatch(storeSearchQuery(item))
         dispatch(tooglefuncSlice(true))
         setSuggestion([])
        }} key={item} className="py-2 shadow-sm cursor-pointer hover:shadow-2xl"     >{item}</li>)
     })}
    </ul>
  </div>


    </div>
{
flag&& <div className="h-1 rounded-lg"><FontAwesomeIcon icon={faMicrophone} className="pt-3.5" /></div>
}
   {flag&& <div  className="col-span-1 text-center flex justify-around" >
  <div><FontAwesomeIcon icon={faVideo} className="pt-3.5"/></div>  

  <div ><FontAwesomeIcon icon={faUser} className="text-red-600 pt-3.5"/>
    </div> 
    </div>
}

</div>
</div>
    )
}





export default Head
