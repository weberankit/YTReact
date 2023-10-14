import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {useSearchParams} from "react-router-dom"
import CommentControl from "./CommentControl";
import LiveChat from"./LiveChat"
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
  
  
  <div className="flex flex-col w-full">
  
 <div className="px-5 flex">
  <div>
    <iframe 
    width="900"
     height="600" 
     src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
      title="YouTube video player" 
     frameBorder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     allowFullScreen>

    </iframe>
    </div>

    <div className="w-full ">
      <LiveChat/>
      </div>
 </div>
<CommentControl/>
  </div>
  
  )
};

export default WatchPage;
