import React from "react";
import "./navbar.css";
import { AiOutlineGithub, AiOutlineTwitter,AiOutlineMedium } from "react-icons/ai";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>BestZurnas</h1>
      </div>
      <div className="navbar-right">
        <a href="https://github.com/ebrardev"><AiOutlineGithub size={30}/></a>
        <a href="https://twitter.com/ebrardev"><AiOutlineTwitter size={30}/></a>
        <a href="https://medium.com/ebraraltunkynk"><AiOutlineMedium size={30}/></a>
      </div>
    </nav>
  );
}

export default Navbar;