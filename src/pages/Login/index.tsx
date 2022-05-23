import { render } from "@testing-library/react";
import React from "react";
import {LoginPageProps} from "../../types/loginPropType";
import {LoginPageState} from "../../types/loginStateType";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

function TestFunction(){
    console.log((document.getElementById("login-email") as HTMLInputElement).value);
    console.log((document.getElementById("login-password") as HTMLInputElement).value);
}

const LoginPage: React.FC = () => {
    return (
        <div className = "login-page">
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