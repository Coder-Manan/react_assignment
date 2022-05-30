import firebase from "firebase/compat/app";
import { getDownloadURL, getMetadata, ref, uploadBytes } from "firebase/storage";
import React from "react";
import { useState } from "react";
import allInterests from "../../constants/AllTags";
import { db, storage} from "../../services/firebase/firebase";
import FirebaseServices from "../../services/firebase/firebaseClass";
import { reset_interests, getInterests } from "../../utils/Interest";
import { getUserInterests } from "../../services/firebase/firebase";
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
                console.log(url);
                //extracting the time of update of the post
                setvisible("none");
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
    reset_interests();
    var reader = new FileReader();
    return(
        <div id="Modal" className="modal" style={{"display":visible, "zIndex": 100, "position": "absolute", "width": "100%", "height": "100%", "background": "rgba(0,0,0,0.4)","boxShadow":"0 0 60px 10px rgba(0, 0, 0, 20)"}}>
            <div className="modal-content" id="modal-content">
            <Button onClick={()=>{setvisible("none")}} text="Close"></Button>
                <br />
                <br />
                <input type="file" accept=".jpg" id="image-input" onChange={(event)=>{
                    let file = event.target.files![0];
                    let fileSize = file.size;
                    reader.onload = function (e){
                        setimage(file);
                        setfolderName(fileSize+"");
                    }
                    reader.readAsDataURL(file);
                    }}/>
                <img src={image} alt="Your Image" id="post-image"/>
                <div id="image"><input type="text" placeholder="Caption" /></div>
                <div id="tags-1">
                    {allTags.slice(0,5)}
                </div>
                <div id="tags-2">
                    {allTags.slice(5,10)}
                </div>
                <br />
                <Button onClick={async ()=>{
                    //first check if atleast one interest is common b/w user and post tags
                    let userInterests = await getUserInterests();
                    let postTags = getInterests();
                    if (postTags.length == 0){
                        alert("Please choose atleast one tag");
                    }
                    for (let i = 0; i < postTags.length; i++) {
                        for (let j = 0; j < userInterests.length; j++) {
                            if (postTags[i] == userInterests[j]){
                                Upload1();
                                return;
                            }
                        }
                    }
                    alert("Atleast one tag should match with your interests");
                    }} text="Publish Post"></Button>
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