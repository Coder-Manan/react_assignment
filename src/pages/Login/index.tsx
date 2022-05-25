import { render } from "@testing-library/react";
import React from "react";
import {LoginPageProps} from "../../types/loginPropType";
import {LoginPageState} from "../../types/loginStateType";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import "../App.css";
import Nav from "../../components/authnav/Nav";

function TestFunction(){
    console.log((document.getElementById("login-email") as HTMLInputElement).value);
    console.log((document.getElementById("login-password") as HTMLInputElement).value);
}

const LoginPage: React.FC = () => {
    return (
        // nav bar
        <div className = "login-page">
            <Nav />
            <InputField 
                id="login-email"
                type="email"
                label="Email"
                class="input"  
            />
            <InputField 
                id="login-password"
                type="password"
                label="Password"
                class="input"    
            />
            <Button
                onClick={TestFunction}
                text="Login"
            />
        </div>
    )
} 

export default LoginPage;