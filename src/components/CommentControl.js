import { useState, useEffect } from "react";
import { addComment,replyComment } from "../utils/coomentSlice";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";

const Comment = ({ data, fake }) => {
  console.log(data,fake,"mai fake hu");
  const [add, setAdd] = useState([]);
  //   console.log(reply)
  const { name, text, replies } = data;
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex w-full p-2 line-clamp-2 bg-white rounded-lg">
        
      <div className="p-1">
        
        <input
        
        placeholder="Your Comment"
          type="text"
          className="border border-black w-80 p-2 rounded-2xl mr-1"
          onChange={(e) => {
            setAdd({
              name: "Ankit kr",
              replies: [],
              text: e.target.value,
              id:data.id
            });
            // setReply({ ...reply, text: e.target.value })
          }}
        />
        <button className="p-3 bg-red-500 text-white shadow-xl rounded-lg "
          onClick={() => {
           // dispatch(addComment(reply));
         // data.replies.push(add)
        // const newComment = { ...data };
        // newComment.replies.push(add);
        // console.log(newComment)
         dispatch(replyComment(add));

          }}
        >
          reply
        </button>
      </div>




        <img
          className="w-8 h-8 "
          alt="user-image"
          src="https://www.svgrepo.com/show/525577/user-circle.svg"
        />
        <div className="flex justify-around ">
          <h2 className="font-bold "> {name} </h2>  
          <h2 className="ml-2"> {text}</h2>
        </div>
      </div>
    </div>
  );
};

const CommentList = ({ comments ,fake}) => {
  // console.log(comments)

  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <Comment data={comment} fake={fake}/>

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
  console.log(commentData.commentData,"nnnn");
  const dispatch = useDispatch();
  const [reply, setReply] = useState([]);
   const [commentDatas,setCommentData]=useState(commentData.commentData)
  //console.log(commentDatas,"this")

  return (
    <div className="m-5 p-2 shadow-sm   rounded bg-gray-200">
        <div className="flex justify-between">
      <h1 className="text-2xl font-bold">
        comments:
        <span className="font-thin text-lg"> N-level nested comments</span>
      </h1>


      <div className="p-1">
        
          <input
          
          placeholder="Your Comment"
            type="text"
            className="border border-black w-80 p-2 rounded-2xl mr-1"
            onChange={(e) => {
              setReply({
                name: "Ankit kr",
                replies: [],
                text: e.target.value,
                
              });
              // setReply({ ...reply, text: e.target.value })
            }}
          />
          <button className="p-3 bg-red-500 text-white shadow-xl rounded-lg "
            onClick={() => {
              dispatch(addComment(reply));
            }}
          >
            comment
          </button>
        </div>

</div>


      {
      <CommentList comments={commentData.commentData} fake={commentDatas}/>
    }

    </div>
  );
};

export default CommentControl;
