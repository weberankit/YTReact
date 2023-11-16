//import React from "react"
import Button from "./Button"
import{useState,useContext} from "react"
import { dartModeFlag } from "../utils/useContexts"

const list=["All","New","Songs","Comedy","Movie","teaser","tamil","Ank","Official","Leo","Devotional","Sam"]

const ButtonList=()=>{
  const {modeFlag,setModeflag} =useContext(dartModeFlag) 
let classValue;
(modeFlag==true)?classValue="bg-[#0f0f0f] ":classValue="bg-white text-black"
  const [bgColor , setbgColor] =useState(0)

  return(
<div className={`${classValue} overflow-scroll flex pt-12 md:pt-4 pb-1 sm:ml-8`}>
{list.map((item,index)=> <Button  name={item}
              showItem={index===bgColor?true:false}
              setbgColor={()=>{setbgColor(index)}}
              index={index}
                                               

/>)}
</div>
  )
}


export default ButtonList
