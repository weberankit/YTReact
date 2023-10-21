import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {useSearchParams} from "react-router-dom"
import CommentControl from "./CommentControl";
import LiveChat from"./LiveChat"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faQrcode, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
const WatchPage = () => {
  const dispatch = useDispatch();
  //console.log(closeSidebarDispatch)

  /*closing sidebar when WatchPagecomponent load*/
  useEffect(() => {
    console.log("hii");
    dispatch(closeMenu());
  }, []);

const [searchParams]=useSearchParams()
console.log(searchParams.get("v"))


  return( 
  
  
  <div className="flex flex-col w-full overflow-y-scroll">
  
 <div className="px-5 flex flex-col">
  <div >
    <div className="">
    <iframe 
   className="w-full rounded-md pt-3"
     height="600" 
     src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
      title="YouTube video player" 
     frameBorder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     allowFullScreen>

    </iframe>
    </div>
    <div className="flex justify-between pt-2">
<div className="bg-black text-white p-2 rounded-lg flex justify-between ">
  <h1 className="flex justify-center items-center">MyChannel</h1>
   <div><h1 className="p-3 bg-red-600 rounded-lg ml-2 "><FontAwesomeIcon icon={faBell}/> Subscribe</h1></div>
  </div>

  <div className="flex justify-around w-72">
   
    <h2 className="p-3 bg-white font-bold"> <FontAwesomeIcon icon={faThumbsUp} className="font-normal"/> 101K</h2>
    <h3 className="p-3 font-bold"><FontAwesomeIcon icon={faQrcode}/> QR code </h3>
</div>
</div>
    </div>

    <div className="w-full">
      <LiveChat/>
      </div>
 </div>
<CommentControl/>
  </div>
  
  )
};

export default WatchPage;
