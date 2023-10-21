import { useState, useEffect } from "react";
import { addComment,replyComment } from "../utils/coomentSlice";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";

const Comment = ({ data }) => {
//  console.log(data,"mai fake hu");
  const [add, setAdd] = useState([]);

  const [check,setcheck]=useState()
   //  console.log(check)
  const { name, text, replies } = data;
  const dispatch = useDispatch();
  return (
    <div className="">
      <div className="flex flex-col  w-full p-2 line-clamp-2 bg-white rounded-lg">
        


      <div className="flex text-xs sm:text-lg">
        <img
          className="w-8 h-8 "
          alt="user-image"
          src="https://www.svgrepo.com/show/525577/user-circle.svg"
        />
        <div className="flex justify-around pt-2">
          <h2 className="font-bold "> {name} </h2>  
          <h2 className="ml-2"> {text}</h2>
        </div>
     </div>



      <div className="p-1 ">
        
        <input
        value={check}
        placeholder="Your Reply"
          type="text"
          className="border border-black w-44 sm:w-80 p-1 rounded-2xl mr-1"
          onChange={(e) => {
            setcheck(e.target.value)
            setAdd({
              name: "Ankit kr",
              replies: [],
              text: e.target.value,
              id:data.id
            });
            // setReply({ ...reply, text: e.target.value })
          }}
        />
        <button className="p-2 bg-red-500 text-white shadow-xl rounded-lg "
          onClick={() => {
           // dispatch(addComment(reply));
         // data.replies.push(add)
        // const newComment = { ...data };
        // newComment.replies.push(add);
        // console.log(newComment)
        check==undefined?alert("plz provide input"):dispatch(replyComment(add));
       
         setcheck("")
          }}
        >
          reply
        </button>
      </div>



     
     
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  // console.log(comments)

  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <Comment data={comment}/>

            <div className="pl-5 border border-l-black ml-5">
              <CommentList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CommentControl = () => {
  let commentData = useSelector((store) => store.comment);
  //console.log(commentData.commentData,"nnnn");
  const dispatch = useDispatch();
  const [reply, setReply] = useState([]);
  //  const [commentDatas,setCommentData]=useState(commentData.commentData)
  //console.log(commentDatas,"this")
   const [checkInput,setcheckInput]=useState()
  return (
    <div className="m-5 p-2 shadow-sm   rounded bg-gray-200 line-clamp-2">
        <div className="flex justify-between flex-col md:flex-row">
          <div>
      <h1 className="text-2xl font-bold">
        comments:
        <span className="font-thin text-sm sm:text-lg"> N-level nested comments</span>
      </h1>
       </div>

      <div className="p-1">
        
          <input
          value={checkInput}
          placeholder="Your Comment"
            type="text"
            className="border border-black w-44 sm:w-64 sm:p-2 rounded-2xl mr-1"
            onChange={(e) => {
              setcheckInput(e.target.value)
              setReply({
                name: "Ankit kr",
                replies: [],
                text: e.target.value,
                //using time as id but it is not good practicse 
                id:new Date().getTime()
              });
              // setReply({ ...reply, text: e.target.value })
            }}
           

          />
          <button className="p-2 sm:p-3 bg-red-500 text-white shadow-xl rounded-lg "
            onClick={() => {
         checkInput==undefined?alert("provide correct input") :    dispatch(addComment(reply));
              setcheckInput("")
            }}
          >
            comment
          </button>
        </div>

</div>


      {
      <CommentList comments={commentData.commentData} />
    }

    </div>
  );
};

export default CommentControl;
