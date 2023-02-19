import React from 'react'
import logo from "../images/bookmark-footer-logo.svg"
import {GrFacebook} from "react-icons/gr"
import {GrTwitter}from "react-icons/gr"

export default function Footer() {
  return (
    <div>
      <section className="footer">
        <div className='part1'>
          <p className="footerText">35,000+ already joined</p>
          <h2 className="footerHeading">Stay up-to-date with what we’re doing</h2>
          <div className="contactUs">
            <form action="">
              <input type="email" id='email'  placeholder='Enter Your Email Address' required/>
              <button type='submit' className='contactBtn'>Contact Us</button>
            </form>
          </div>
        </div>
        <div className="part2">
          <div className="footerLogo"><img src={logo} alt="" /></div>
          <ul className="items">
              <li>features</li>
              <li>pricing</li>
              <li>contact</li>
          </ul>
          <div className="socialLinks">
            <GrFacebook className='fb'/>
            <GrTwitter  className='twitter'/>
          </div>
        </div>
      </section>
    </div>
  )
}
