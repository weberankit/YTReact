

//import React from "react"
import {useDispatch, useSelector} from "react-redux"
import { toogleSlice,closeMenu } from "../utils/appSlice"; 
import {useState,useEffect,useContext} from "react"
import { YOUTUBE_Search_API } from "../utils/constant";
//import {useSelector} from "react-redux"
import { cacheResults } from "../utils/searchSlice";
//import {Link} from "react-router-dom"
import { storeSearchQuery ,tooglefuncSlice} from "../utils/filterSlice";
//import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faPlay, faSearch, faUser, faVideo} from '@fortawesome/free-solid-svg-icons';
import { dartModeFlag } from "../utils/useContexts";



const Head=()=>{
const dispatch = useDispatch();


const {modeFlag,setModeflag} =useContext(dartModeFlag) 
console.log(modeFlag)

let classValue;
(modeFlag==true)?classValue="bg-[#0f0f0f] text-white":classValue="bg-white text-black"

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
<div className={` fixed w-full  z-20 ${classValue}` }>
<div className=" flex flex-col    sm:grid sm:grid-flow-col p-5 m-2 shadow-lg ">
{
  hideIcon &&  <div className={"flex col-span-1 order-1" }>
  
    <FontAwesomeIcon icon={faBars} onClick={()=>toggleMenuHandler()} className={`${classValue} h-8 cursor-pointer`} />

    {modeFlag == true ?<a href="/">{<FontAwesomeIcon icon={faPlay}className="text-red-500 h-8 mx-4" />}</a>:
   <a href="/"> <img className="h-8 mx-4" alt ="youtube logo" 
   src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzg_LCf5ZahVQ42WRFD0PS3TNrpdOhqvckaO6-xgyo7kmVo5KW2EV6CEUakyaSGdmxqw&usqp=CAU"} />
   </a> 

}
    </div>
}

    <div className="order-2">
    <div className={"col-span-12 px-10  " }>
    <input className={ ` ${classValue} w-5/6 border border-gray-400 p-1  rounded-l-full`} type="text"
     value={searchQuery} 
    onChange={(e)=>setSearchQuery(e.target.value)} 
    onFocus={()=>{
    //only for smaller devices
      if(window.screen.width<600)   setHideIcon(false)
   
    
    }
    
    }
    onBlur={()=>{
      
      if(window.screen.width<600) setHideIcon(true)
    
    }}
    />
    <button className = {` ${classValue} border border-gray-400 p-1 rounded-r-full `} onClick={()=>{
      dispatch(storeSearchQuery(searchQuery))
      dispatch(tooglefuncSlice(true))
      setSuggestion([])
      }}><FontAwesomeIcon icon={faSearch} className="text-gray-400"/></button>
    </div>



  <div className={` ${classValue}fixed py-2 px-5 w-[32rem] shadow-lg rounded-md  ml-12`}>
    <ul>

     {suggestion.map((item)=>{
        return  (
        <li onClick={()=>{
       //   setSearchQuery(item)
          dispatch(storeSearchQuery(item))
         dispatch(tooglefuncSlice(true))
         setSuggestion([])
        }} key={item} className={` ${classValue } py-2 shadow-sm cursor-pointer hover:shadow-2xl`}     >{item}</li>)
     })}
    </ul>
  </div>


    </div>
{
<div className="h-1 rounded-lg   order-3"><FontAwesomeIcon icon={faMoon} className="pt-3.5 p-2"
 onClick={()=>{
 setModeflag(!modeFlag)
 
}} 
/></div>
}
   {flag&& <div  className="col-span-1 text-center flex justify-around order-4" >
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
