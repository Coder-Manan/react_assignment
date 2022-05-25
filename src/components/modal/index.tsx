import { useState } from "react";

var setDisplay: (arg0: string) => void;

const Modal: React.FC = () => {
    const [visible, setvisible] = useState("none");
    setDisplay = setvisible;
    return(
        <div id="Modal" className="modal" style={{"display":visible, "zIndex": 1}}>
            <div className="modal-content" id="modal-content" style={{"backgroundColor":"#fefefe"}}>
                <button onClick={()=>{setvisible("none")}}>Close</button>
                <br />
                <input type="file" accept=".jpg" id="image" onChange={()=>{}}/>
                <div id="image"><input type="text" placeholder="Caption" /></div>
                {/* <!-- tags --> */}
            </div>
        </div>
    );
} 

function showModal(){
    setDisplay("block");
    console.log("modal");
    console.log(document.getElementById("modal-content")?.style.display);
}

export {showModal, Modal};