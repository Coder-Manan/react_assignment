import React from "react";
import useFetch from "../../hooks/AnimalFetch";
import { setName } from "../../pages/Main";
import MainNavProps from "../../types/mainNavPropType";

const MainNav: React.FC<MainNavProps> = (props: MainNavProps) =>{
    const {userName, pictureURL} = props;




    return(
        <div>
            <nav>
                <h2>CaseBook</h2>
                <h4>{userName}</h4>
                <img src={pictureURL} width="99.03"/>
                <button>SignOut</button>
            </nav>
        </div>
    );
}

export default MainNav;