import React from "react";
import PostProps from "../../types/postPropType";
import Button from "../Button";
import Comment from "../comment";
import { useState } from "react";
import InputField from "../InputField";
import "./Post.css";
import { Name, urlArray } from "../../pages/main";
import { fetchCommentSection, UploadComment } from "../../services/firebase/firebase";

let setSrc:any , setCaption:any;
let Caption : string;
let commentArray: Array<any> = [];
let hhhrrr : string;
// let commentComponents : any;

const Post: React.FC<PostProps> = (props: PostProps) => {
    const [comment, setComment] = useState("");
    const [commentComponents, setcommentComponents] = useState<any>()
    const {id, username, url, capson} = props;
    hhhrrr = url;
    function PostComment() {
        console.log(url);
        console.log(username);
        // fetchCommentSection(url);      
        console.log(comment);
        
        UploadComment(Name, url, comment)  
    }
    
    function showCommentBox(){
        setshowComments(showComments === "none" ? "block" : "none"); //will toggle display of comments div
            fetchCommentSection(url);
        setTimeout(() => {
           
        let commentComp = commentArray.map((comment: any)=>{
    return(
        // TODO: pass comment props from comment object
        <Comment comment={comment.TEXT} commentator={comment.USERNAME}></Comment>
    )
  })    
        commentArray= [];
        setcommentComponents(commentComp);   
        }, 1000);
    }

    
    const [showComments, setshowComments] = useState("none");
    const [src, setsrc] = useState();
    const [caption, setcaption] = useState("Default Caption");
    setSrc = setsrc;
    setCaption = setcaption;
    Caption = caption;
    return(
        <div id={id} className="Post">
            {/* TODO fetch data and set */}
            <div id="username">{username}</div>
            <img src={url} alt="Post Pic" />
            <div id="post-caption">{capson}</div>
            {/* 3 buttons in a horizontal list */}
            <div id="buttons" className="buttons">
                <div className="button">
                <Button onClick={()=>{
                  showCommentBox()
                }} text="Comments"></Button></div>
                <div className="button"><Button onClick={()=>{
                    // increase like count, decrease dislike count if user had disliked post earlier
                }} text="Like"></Button></div>
                {/* like count */}
                <div className="button"><Button onClick={()=>{
                    // increase dislike count, decrease dislike count if user had liked post earlier
                }} text="Dislike"></Button></div>
                {/* dislike count */}
            </div>
            <div id="comments-section" className="comments-section" style={{"display":showComments}}>
                {/* TODO */}
                <div className="comments">
                    {commentComponents}
                </div>
                
                    <div id="new-comment">
                        {/* <InputField type="text" id="" label="" class="comment-input" onChange={(event)=>{setComment(event.target.value)}}></InputField> */}
                        <input type = "text" className= "comment-input" onChange ={(e)=>{setComment(e.target.value)}}></input>
                        <Button onClick={()=>{PostComment()}} text="Post Comment"></Button>
                    </div>
    
            </div>
        </div>
    )
}

export default Post;
export {setSrc, setCaption, Caption, commentArray, hhhrrr}


