

import React, { useEffect, useState,useContext } from "react";
import { Youtube_videos_API } from "../utils/constant";
import VideoCards, { AddVideo } from "./VideosCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShimmerEffect from "./ShimmerEffect"
import { dartModeFlag } from "../utils/useContexts";
const VideoContainer = () => {
  const SearchValue = useSelector((store) => store.filter);
  const [videos, setVideos] = useState([]);
  const [filterVideos, setFilterVideos] = useState([]);

  const {modeFlag,setModeflag} =useContext(dartModeFlag) 


let classValue;
(modeFlag==true)?classValue="bg-[#0f0f0f] text-white":classValue="bg-white text-black"
   ///console.log(videos)
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(Youtube_videos_API);

    const json = await data.json();
    console.log(json)
    setVideos(json.items);
    setFilterVideos(json.items);
  };
  
  const sortVideosfun = (list, searchInput) => {
    const sortedList = list.filter((item) => {
      return (
        item?.snippet?.title?.toLowerCase().includes(searchInput?.toLowerCase().trim()) 
      );
    });
    return sortedList;
  };
  

//setting up random index for add video
  function RandomIndex(){return Math.floor(Math.random()*50)}
  
//not sure--  to protect from lots of rendering used callfunction 
  useEffect(() => {
    if (SearchValue.callFunction) {
      RandomIndex()
 
      const newlist = sortVideosfun(videos, SearchValue.searchquery);
      setFilterVideos(newlist);

    }
  }, [SearchValue]);



  if (filterVideos.length === 0) return <ShimmerEffect/>;

  

  return (
    <>
    
    <div className={`${classValue} grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 pt-2 sm:ml-9`}>
   

      <AddVideo info={videos[RandomIndex()]} />
      {filterVideos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCards info={video} />
        </Link>
     ) )}
    </div>
</>

  );
};

export default VideoContainer;
