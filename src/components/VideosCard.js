

const VideoCards=({info})=>{
    //console.log(info)

const{snippet ,statistics} = info
const {channel ,title,thumbnails} = snippet;


    return(
        
<div className="p-2 m-2 w-72 shadow-lg">
<img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url}/>
<ul>
    <li className="font-bold py-2">{title}</li>
    <li>{channel}</li>
    <li>{statistics.viewCount} views</li>
</ul>

</div>



    )
}

///high orderfunction for addvertisement
export const AddVideo=({info})=>{
return(
    <div className="border border-b-gray-900">
        <h1>ADDVERTISEMENT</h1>
        <VideoCards info={info}/>
    </div>
)
}
export default VideoCards