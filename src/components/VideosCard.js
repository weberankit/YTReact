import{useSelector} from "react-redux"
import {Link} from "react-router-dom"
const VideoCards=({info})=>{
    //console.log(info)
    
const select= useSelector((store)=>store.app)
//console.log(select.isMenuopen,"useselector")
const{snippet ,statistics} = info
const {channelTitle ,title,thumbnails} = snippet;
//console.log(info)

    return(
        <div className={select.isMenuopen===false ?" md:w-[500px] ":"w-96 " }>
<div className=" p-2 m-2 w-full  md:w-96 shadow-lg ">
<img className="rounded-lg w-full sm:w-full  md:w-80" alt="thumbnail" src={thumbnails.medium.url}/>
<ul>
    <li className=" font-bold text-1xl   py-2 sm:font-semibold md:text-sm">{title}</li>
    <li className="font-bold text-1xl">{channelTitle}</li>
    <li className="font-bold text-1xl sm:font-extralight">{statistics.viewCount} views</li>
</ul>

</div>
</div>


    )
}

///high orderfunction for addvertisement
export const AddVideo=({info})=>{
return(
    <div className="shadow-lg ">
        <h1 className="p-2 text-1xl sm:p-3    bg-red-500 rounded-lg text-white  absolute flex z-10 md:p-3">ADD</h1>
    <Link to={"/watch?v=" + info.id}>   <VideoCards info={info} />
       </Link> 
        {console.log(info)}
    </div>
)
}
export default VideoCards