import React from "react";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <img src="/img/logo.png" alt="logo" className="logo" />
        <div className="flex items-center">
          <a href=" " className="text-white min-w-[50px] font-medium">
            Home
          </a>
          <button className="log-btn btn">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
