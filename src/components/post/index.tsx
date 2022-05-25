import React from "react";
import PostProps from "../../types/postPropType";
import Button from "../Button";
const Post: React.FC<PostProps> = (props: PostProps) => {
    const {id} = props;
    return(
        <div id={id}>
            <img src="" alt="Post Pic" />  {/* TODO fetch picture and set */}
            <div id="post-caption"></div>
            {/* 3 buttons in a horizontal list */}
            <div id="buttons">
                <Button onClick={()=>{}} text="Comments"></Button>
                <Button onClick={()=>{}} text="Like"></Button>
                {/* like count */}
                <Button onClick={()=>{}} text="Dislike"></Button>
                {/* dislike count */}
            </div>
            <div id="comments" style={{"display":"none"}}>
                {/* TODO */}
            </div>
        </div>
    )
}

export default Post;