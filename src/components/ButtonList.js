//import React from "react"
import Button from "./Button"
import{useState} from "react"
const list=["All","News","Songs","NamasteJS","Movies","JS","React","KhanSir","Story","Trailer","Devotional","Sam"]







const ButtonList=()=>{
  const [bgColor , setbgColor] =useState(0)

  return(
<div className="overflow-scroll flex pt-7 md:pt-4 pb-1 sm:ml-8">
{list.map((item,index)=> <Button  name={item}
              showItem={index===bgColor?true:false}
              setbgColor={()=>{setbgColor(index)}}
              index={index}
                                               

/>)}
</div>
  )
}


export default ButtonList
