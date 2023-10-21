import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom"
import CommentControl from "./CommentControl";
import LiveChat from"./LiveChat"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMessage, faQrcode, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import QRCode from 'qrcode.react';
import "../App.css"
import { generate } from "../utils/helper";
const WatchPage = () => {
  const [chatvisible , setchatVisible] = useState(false)
  const [searchParams]=useSearchParams()
console.log(searchParams.get("v"))
  const dispatch = useDispatch();
  //console.log(closeSidebarDispatch)
const [qrcodeShow , setQrcodeShow]=useState(false)
  /*closing sidebar when WatchPagecomponent load*/

//setQrcode("https://www.youtube.com/embed/"+ searchParams.get("v")+"?autoplay=1&mute=1")



  useEffect(() => {
  //  console.log("hii");
    dispatch(closeMenu());
  }, []);


const QrCodeString="https://www.youtube.com/embed/"+ searchParams.get("v")+"?autoplay=1&mute=1"
//console.log(QrCodeString)
  return( 

   
  <div className="flex flex-col w-full overflow-x-scroll">
 
 <div className="px-5 flex flex-col ">
  <div >
  
    <div className="w-full rounded-md pt-3 relative">
    <iframe 
    className="w-full  youtube-iframe"
    height="500" 
     //width="400"
    
     src={"https://www.youtube.com/embed/"+ searchParams.get("v")+"?autoplay=1&mute=1"}
      title="YouTube video player" 
     frameBorder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     allowFullScreen
     autoplay
     >

    </iframe>
    </div>
    <div className="flex justify-between pt-2">
<div className="bg-black mb-2 text-white p-1 sm:p-2 rounded-lg flex justify-between ">
  <h1 className="flex justify-center items-center text-sm">MyChannel</h1>
   <div><h1 className=" p-1 text-sm sm:p-3 bg-red-600 rounded-lg ml-2 "><FontAwesomeIcon icon={faBell}/> Subscribe</h1></div>
  </div>

  <div className="flex justify-around w-72">
   <div className=" fixed left-[50%] top-[50%]">{qrcodeShow&&<QRCode value={QrCodeString}/>}</div>
    <h2 className="p-3 bg-white font-bold"> <FontAwesomeIcon icon={faThumbsUp} className="font-normal"/> 101K</h2>
    <h3 onClick={
      ()=>{

   setQrcodeShow(!qrcodeShow)

  
      }
    } className="p-3 font-bold cursor-pointer"><FontAwesomeIcon icon={faQrcode}/> {qrcodeShow==true?"Hide":"Open in Phone "}</h3>
</div>
</div>
    </div>

    <div className="w-full">
      <div className="bg-red-500 cursor-pointer inline-block p-3 m-2 rounded-lg hover:bg-black hover:text-white " onClick={()=>setchatVisible(!chatvisible)}><FontAwesomeIcon icon={faMessage}/>Live Chat</div>
    { chatvisible&& <LiveChat/>}
      </div>
 </div>

<CommentControl/>

  </div>
  
  )
};

export default WatchPage;
