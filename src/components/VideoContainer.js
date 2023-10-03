//import React from "react"
import {useEffect,useState} from "react"
import { Youtube_videos_API } from "../utils/constant"
import VideoCards,{AddVideo} from "./VideosCard"
import {Link} from "react-router-dom"

const VideoContainer=()=>{
    const [videos , setVideos] = useState([])
    useEffect(()=>getVideos,[])
     const getVideos= async()=>{
        const data= await fetch(Youtube_videos_API)
        const json= await data.json()
     //   console.log(json)
        setVideos(json.items)
     }
    console.log(videos)

   if(videos.length === 0)return 
return(
<>

<div className="flex flex-wrap w-screen">
   <AddVideo info={videos[0]}/>
{videos.map(video=><Link key={video.id} to={"/watch?v="+video.id}> 

<VideoCards info={video}/> 
</Link> )}


</div>
</>

    )
}
export default VideoContainer