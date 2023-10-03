//import React from "react"
import Button from "./Button"
const list=["All","News","Songs"]
const ButtonList=()=>{
  return(
<div className="flex">
{list.map(item=> <Button name={item} />)}
</div>
  )
}


export default ButtonList
