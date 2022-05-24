import React from "react";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Nav from "./components/authnav/Nav";
import {MainPage} from "./pages/main";

const App: React.FC = () => {
  return(
    
    <Router>
      <Routes>
        <Route path="/home" element={<MainPage />}/>
        <Route path = "*" element={<LoginPage/>}/>
        <Route path = "/login" element={<LoginPage/>}/>
        <Route path = "/signup" element={<SignUpPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;

