import { Dispatch, SetStateAction, useState } from "react";
import confirm from "./logic";
import Interest from "../Interests";
import allInterests from "../../constants/allTags";
import Button from "../Button";
var setDisplay: (arg0: string) => void;
var setImage: Dispatch<SetStateAction<undefined>> | ((arg0: string | ArrayBuffer | null) => void);

const Modal: React.FC = () => {
    const allTags = allInterests.map((interest)=>{
        return(
          <Interest interest={interest} key={interest}></Interest>
        );
      })
    const [visible, setvisible] = useState("none");
    const [image, setimage] = useState();
    setImage = setimage;
    setDisplay = setvisible;
    return(
        <div id="Modal" className="modal" style={{"display":visible, "zIndex": 100, "position": "absolute", "width": "100%", "height": "100%", "background": "rgba(0,0,0,0.4)","boxShadow":"0 0 60px 10px rgba(0, 0, 0, 20)"}}>
            <div className="modal-content" id="modal-content">
                <Button onClick={()=>{setvisible("none")}} text="Close"></Button>
                <br />
                <br />
                <input type="file" accept=".jpg" id="image-input" onChange={()=>{confirm()}}/>
                <img src={image} alt="Your Image" id="post-image"/>
                <div id="image"><input type="text" placeholder="Caption" /></div>
                <div id="tags-1">
                    {allTags.slice(0,5)}
                </div>
                <div id="tags-2">
                    {allTags.slice(5,10)}
                </div>
                <br />
                <Button onClick={()=>{}} text="Publish Post"></Button>
            </div>
        </div>
    );
} 

async function showModal(){
    await setDisplay("block");
    console.log("modal");
    if (document.getElementById("modal-content") == null){
        console.log("null");
    }
    console.log(document.getElementById("modal")?.style.display);
}

export {showModal, Modal, setImage};