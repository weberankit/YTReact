
import { useState } from "react"






const Button=({name,showItem,setbgColor,index})=>{


  
/*
   const getData=async(value)=>{
      const data= await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=${value}&key=AIzaSyAaxkDGz_6EgvCLLn_O7MBYMcK78HyzI10`);
      
      const json=await data.json()
    console.log(json,"this is json")
   setStoreResult(json.items)
   // return json
    }

*//*
   useEffect(()=>{
      getData(sortedButton)
console.log(getData(sortedButton))
    },[sortedButton])
     /* */

   // const{name}=props
   //const{setbgColor} =props.setbgColor
   //nsole.log(setbgColor)

    return(
 <div>
   
   




{
 <button  
  onClick={()=>{setbgColor()}}
className={showItem ? "bg-black text-white px-5 py-2  rounded-md shadow-lg":"bg-gray-400 px-5 py-2 m-1 rounded-md shadow-lg "}
   
    >{name}</button>
}




 </div>
    )
}





export default Button;



