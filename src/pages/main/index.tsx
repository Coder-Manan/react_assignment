import React from "react";
import MainNav from "../../components/MainNav";
import { useState } from "react";
import LoginPage from "../Login";
import useFetch from "../../hooks/AnimalFetch";
import "../../components/Modal/modal.css";
//import Modal from "../../components/modal";
import Button from "../../components/Button";
//import { showModal } from "../../components/modal/modal";
//import "../../components/modal/modal.css";
import { showModal, Modal } from "../../components/Modal";
import Post from "../../components/Post";
var setName;

const MainPage:  React.FC =()=>{


    const {data, loading, error}  =useFetch("https://zoo-animal-api.herokuapp.com/animals/rand");


    const [userName, setuserName] = useState("username");
    setName = setuserName;
    //setuserName("test");
    return userName != "" ?(
        <div id="MainPage">
            <MainNav userName={userName} pictureURL={data!}/>
            <Button onClick={()=>{showModal()}} text="New Post"></Button>
            <Modal></Modal>
            {/* TODO: fetch all posts and for each, make a Post component */}
        </div>
    ): 
    (<LoginPage />)
    
}

export {MainPage, setName, };
