import React from "react";
import MainNav from "../../components/mainnav/mainNav";
import { useState } from "react";
import LoginPage from "../Login";
import useFetch from "../../hooks/AnimalFetch";
// import upload from "../../services/firebase/UploadPost";
import { Modal, showModal } from "../../components/modal";
import Button from "../../components/Button";
import { reset_interests } from "../../utils/Interest";
var setName;
let setInterests;
const MainPage:  React.FC =()=>{


    const {data, loading, error}  =useFetch("https://zoo-animal-api.herokuapp.com/animals/rand");


    const [userName, setuserName] = useState("username");
    const [image, setImage ] = useState(null)
    const [userInterests,setuserInterests] = useState([]);
    setInterests = setuserInterests;
    setName = setuserName;





    //setuserName("test");
    return (
        
        userName != "" ?(
        <div>
        <MainNav userName={userName} pictureURL={data!}/> 
        <Button onClick={()=>{reset_interests(); showModal()}} text="New Post"></Button>
        <Modal></Modal>
        </div>  

    ): (<LoginPage />))
        
    

    
}

export {MainPage, setName, setInterests};
