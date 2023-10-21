import ChatMessage from "./ChatMessage"
import {useEffect,useState} from "react"
import { useDispatch ,useSelector } from "react-redux"
import { addMessage } from "../utils/chatSlice"
import { generate ,makeid } from "../utils/helper"
const LiveChat=()=>{
const dispatch=useDispatch()
const chatMessages=useSelector(store=>store.chat.message)
const [liveMessage ,setLiveMessage]=useState()
useEffect(()=>{
const timer= setInterval(()=>{

//API polling
console.log("calling api")
dispatch(addMessage({
    name:generate(),
    message:makeid(20)
}))

},2000)

return(()=>{clearInterval(timer)})

},[])


return(
    <>
<div className="w-full h-[400px] ml-2 p-2  rounded-lg overflow-y-scroll flex flex-col-reverse bg-black text-white shadow-white ">
    <h1>live Chat</h1>
    <div>
{chatMessages.map(c=> <ChatMessage name={c.name} message={c.message}/> )}
   </div>


</div>
<form className="w-full p-2 ml-2 border border-black bg-black text-white rounded-lg" onSubmit={(e)=>{e.preventDefault() 
    dispatch(addMessage({name:"Ankit kr" , message:liveMessage}))
    setLiveMessage("")
    ;}}>
<input className="border border-black text-black rounded-lg" type="text" value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}}/>    
<button className="px-2 mx-2 bg-green-400 rounded-lg">Send</button>
</form> 

</>
)
}

export default LiveChat

