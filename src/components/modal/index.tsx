import { useState } from "react";
import confirm from "./logic";
var setDisplay: (arg0: string) => void;
var setImage;

const Modal: React.FC = () => {
    const [visible, setvisible] = useState("none");
    const [image, setimage] = useState();
    setImage = setimage;
    setDisplay = setvisible;
    return(
        <div id="Modal" className="modal" style={{"display":visible, "zIndex": 100, "position": "absolute", "width": "100%", "height": "100%", "background": "rgba(0,0,0,0.4)","boxShadow":"0 0 60px 10px rgba(0, 0, 0, 20)"}}>
            <div className="modal-content" id="modal-content">
                <button onClick={()=>{setvisible("none")}}>Close</button>
                <br />
                <input type="file" accept=".jpg" id="image-input" onChange={()=>{confirm()}}/>
                <img src={image} alt="Your Image" id="post-image"/>
                <div id="image"><input type="text" placeholder="Caption" /></div>
                {/* <!-- tags --> */}
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