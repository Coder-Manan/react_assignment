import React from "react";
import Button from "../../components/Button";
import { useState } from "react";

let setProfilePic;

const ProfilePage: React.FC = () => {
    const [profilePicSrc, setprofilePicSrc] = useState();
    const [username, setusername] = useState("username");
    const [emailId, setemailId] = useState("a@b.c");
    setProfilePic = setprofilePicSrc;
    return(
        //1. nav will be same
        //2. circular pic in b/w of page
        //3. user name
        //4. email id
        //5. interests 
        <div>
            <div id="profile-pic" style={{"display":"flex","justifyContent":"space-around"}}> {/* place it in centre of page using css*/}
                <img src={profilePicSrc} alt="Profile Pic" />
            </div>
            <div id="username">
                Username: {username}
            </div>
            <div id="email-id">
                Email: {emailId}
            </div>
            <div id="interests">
                {/* interest components */}
            </div>
            <Button onClick={()=>{}} text="Change Interests"></Button>
        </div>   
    )
}

export default ProfilePage;
export {setProfilePic}