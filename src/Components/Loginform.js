import React from "react";
import "./Loginform.css";
import NormalLoginForm from "./NormalLoginForm";
// import Loginclick from './Loginclick'

const Loginform = () => {
  return (
    <>
      <div className="form-header">
        <div className="loginheader">
          <h1 className="heading-header">Welcome Back</h1>
          <h8>Sub-title text goes here</h8>
          <NormalLoginForm />
        </div>
        <img className="imgsrc" src={"images/internshala.jpeg"} />
      </div>
    </>
  );
};

export default Loginform;
