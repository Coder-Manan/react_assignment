import InputField from "../../components/InputField";
import Button from "../../components/Button";
import "../App.css";
import React from "react";

let interests = [];
function changeInterests() {

}
const SignUpPage: React.FC = () => {
    return (
      <div className="App">
        <h1>Signup page</h1>
        <InputField 
            id="signup-email"
            type="email"
            label="Email"
            class="input"
        />
        <InputField 
            id="signup-password"
            type="password"
            label="Password"
            class="input"
        />
        {/* <input type={String}  placeholder="Username" className="loginPageBoxes" id = "signUpEmail"></input>
        <input type={'password'}  placeholder="password" className="loginPageBoxes" id = "signUpPassword"></input> */}
        <Button
                onClick={()=>{console.log("clicked");}}
                text="SignUp"
            />
        {/* <button onClick={signWithEmailPassword()}>SignUp</button> */}
        {/* <h4>Already have an account?? <Link to = "/login">login</Link></h4> */}
      </div>
    );
  }
  
  export default SignUpPage;