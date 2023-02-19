import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {MdOutlineClose } from "react-icons/md";
import menuLogo from "../images/menu-bookmark.svg"
import logo from "../images/logo-bookmark.svg"
export const Navbar = () => {

  const [nav, setNav] = useState(false);

  return (
    <div className="nav">
      <nav className="">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <ul className="nav-links">
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>
            <button className="logIn">Login</button>{" "}
          </li>
        </ul>

        <div className="mobileMenu">
          <div onClick={() => setNav(!nav)} className="menu">
            {!nav ? (
              <GiHamburgerMenu className="menu" style={{cursor:"pointer"}} size={30} />
            ) : (
              <MdOutlineClose className="close" size={30} />
            )}
          </div>
        </div>
        {
          nav && <img className="menuLogo" src={menuLogo} alt="m" />
        }
        {nav && (
          <ul className="mob-links">
            <hr />
            <li>Features</li>
            <hr />
            <li>Pricing</li>
            <hr />
            <li>Contact</li>
            <hr />
            <li>
              <button className="logInM">Login</button>{" "}
            </li>
          </ul>
          
        )}
      </nav>
    </div>
  );
};
