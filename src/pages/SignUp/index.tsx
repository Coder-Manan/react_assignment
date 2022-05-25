import InputField from "../../components/InputField";
import Button from "../../components/Button";
import "../App.css";
import React from "react";
import Interest from "../../components/Interests";
import allInterests from "../../constants/allTags";
import changeInterests from "../../utils/interests";
import Nav from "../../components/authnav/Nav";
const SignUpPage: React.FC = () => {
  const allTags = allInterests.map((interest)=>{
    return(
      <Interest interest={interest} key={interest}></Interest>
    );
  })
    return (
      <div className="App">
        <Nav />
        <h1>Signup page</h1>
        <InputField 
            id="signup-name"
            type="text"
            label="Name"
            class="input"
        />
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
        <InputField 
            id="signup-password-confirm"
            type="password"
            label="Confirm Password"
            class="input"
        />
        {/* <input type={String}  placeholder="Username" className="loginPageBoxes" id = "signUpEmail"></input>
        <input type={'password'}  placeholder="password" className="loginPageBoxes" id = "signUpPassword"></input> */}
        <br />Choose Your interests
        <div>
        {allTags.slice(0,5)}
        </div>
        <div>
        {allTags.slice(5,10)}
        </div>
        <br />
        <Button
                onClick={()=>{console.log("clicked");}}
                text="Register"
            />
        {/* {allInterests.map((interest)=>{
          <Button onClick={()=>{console.log("interest")}} text={interest}></Button>
        })}; */}
        {/* <button onClick={signWithEmailPassword()}>SignUp</button> */}
        {/* <h4>Already have an account?? <Link to = "/login">login</Link></h4> */}
      </div>
    );
  }
  
  export default SignUpPage;