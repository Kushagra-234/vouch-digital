import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="h-text">
          ATools<span className="dot">.</span>
        </div>
        {/* use of bootstrap classes */}
        <div className="button-group">
          <button className="btn btn-dark">Start Free Trial</button>
          <button className="btn1 btn-warning">Login</button>
        </div>
      </div>
    </>
  );
};

export default Header;
