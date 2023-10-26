import React, { useEffect, useState } from "react";
import { Youtube_videos_API } from "../utils/constant";
import VideoCards, { AddVideo } from "./VideosCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShimmerEffect from "./ShimmerEffect"

const VideoContainer = () => {
  const SearchValue = useSelector((store) => store.filter);
  const [videos, setVideos] = useState([]);
  const [filterVideos, setFilterVideos] = useState([]);
   ///console.log(videos)
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(Youtube_videos_API);
    const json = await data.json();
    setVideos(json.items);
    setFilterVideos(json.items);
  };
  /**/
  const sortVideosfun = (list, searchInput) => {
    const sortedList = list.filter((item) => {
      return (
        item?.snippet?.title?.toLowerCase().includes(searchInput?.toLowerCase().trim()) 
      );
    });
    return sortedList;
  };
  


  
  

  useEffect(() => {
    if (SearchValue.callFunction) {
      const newlist = sortVideosfun(videos, SearchValue.searchquery);
      setFilterVideos(newlist);
    }
  }, [SearchValue]);

  if (filterVideos.length === 0) return <ShimmerEffect/>;

  return (
    <>
    <div className="  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 pt-2 sm:ml-9">
   

      <AddVideo info={videos[9]} />
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
