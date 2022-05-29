import firebase from "firebase/compat/app";
import { getDownloadURL, getMetadata, ref, uploadBytes } from "firebase/storage";
import React from "react";
import { useState } from "react";
import allInterests from "../../constants/AllTags";
import { db, storage} from "../../services/firebase/firebase";
import FirebaseServices from "../../services/firebase/firebaseClass";
import Button from "../Button";
import Interest from "../interests";
import confirm from "./logic";
// import FireStoreUpdate from "../../services/firebase/updateFirestore"



var setDisplay: (arg0: string) => void;
var setImage;
var setFolderName;

export const Imagecontext = React.createContext(null);



const Modal: React.FC = () => {


    
    const allTags = allInterests.map((interest)=>{
        return(
          <Interest interest={interest} key={interest}></Interest>
        );
      })
    
    const [visible, setvisible] = useState("none");
    const [imageUrl , setimageUrl] = useState<string>("")
    const [image, setimage] = useState<any>();
    const [folderName , setfolderName] = useState<string>("");
    const [timeOfUpload ,settimeOfUpload] =useState<string>("");
    setFolderName =  setfolderName;



    function Upload1(){
        console.log(folderName)
        const imageRef = ref(storage, folderName );
        if(image !==null){
            uploadBytes(imageRef, image)
            .then((snap) => {
                
            alert("Uploaded");

            //extracting the url of the image

            getDownloadURL(ref(storage, folderName ))
            .then((url) => {
                console.log(url);
                setimageUrl(url);
                
                //extracting the time of update of the post

                getMetadata(ref(storage, folderName))
                .then((metadata) => {
    
                        settimeOfUpload(metadata.timeCreated);
                        console.log(timeOfUpload);
                        
                    
                }).catch((error) => {
                    console.log(error);
                    
                })
                
                
            }).catch((error) => {
                console.log(error);
                
            })
                
            });
        }

    }

    // FireStoreUpdate("username" , imageUrl, timeOfUpload , )



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
                <Button onClick={()=>{Upload1()}} text="Publish Post"></Button>
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

export {showModal, Modal, setImage, setFolderName };