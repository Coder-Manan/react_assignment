import React from "react";
import PostProps from "../../types/postPropType";
const Post: React.FC<PostProps> = (props: PostProps) => {
    const {id} = props;
    return(
        <div id={id}>
            <img src="" alt="Post Pic" />  {/* fetch picture and set */}
        </div>
    )
}

export default Post;