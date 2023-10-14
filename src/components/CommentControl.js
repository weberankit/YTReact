


const commentData=[
    {
        name:"Ankit kr",
        text:"this is just an awesome video great",
        replies:[{
            name:"Ankit kr",
            text:"this is just an awesome video great",
            replies:[]
        },
        {
            name:"Ankit kr",
            text:"this is just an awesome video great",
            replies:[{
                name:"Ankit kr",
                text:"this is just an awesome video great",
                replies:[{
                    name:"Ankit kr",
                    text:"this is just an awesome video great",
                    replies:[]
                },{
                    name:"Ankit kr",
                    text:"this is just an awesome video great",
                    replies:[]
                }]
            }]
        }]
    },
    {
        name:"Ankit kr",
        text:"this is just an awesome video great",
        replies:[]
    },
    {
        name:"Ankit kr",
        text:"this is just an awesome video great",
        replies:[]
    },


]

const Comment=({data})=>{
    const {name,text,replies} =data;
    return(
        <div className="flex">
 <img className="w-8 h-8" alt="user-image" src="https://www.svgrepo.com/show/525577/user-circle.svg"/>
   <div>
<p className="font-bold"> {name}</p>
<p>{text}</p>
   </div>


        </div>
    )
}


const CommentList=({comments})=>{
return(
    <div>
{comments.map((comment)=>{
    return (
        <div>
    <Comment data={comment}/>

    <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
    </div>
      </div>

    )
})}

    </div>
)
}

const CommentControl=()=>{
return(
    <div className="m-5 p-2 shadow-sm bg-gray-100 p-2 rounded">
  <h1 className="text-2xl font-bold">comments:</h1>

<CommentList comments={commentData}/>

    </div>
)
}
export default CommentControl