import React from 'react'
import heroImg from "../images/illustration-hero.svg"


export default function Home() {
  return (
    <div>
      <section className='home'>
        <div className='info'>
          <div className="headingDiv">
            <h1 className='heading'>
              A Simple Bookmark Manager
            </h1>
          </div>
          <div className="textDiv">
            <p className="text">
            A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
            </p>
          </div>
          <div className="buttons">
            <button className="bChrome">Get it on Chrome</button>
            <button className="bFirefox">Get it on Firefox</button>
          </div>
        </div>

        <div className="imageDiv">
          <div className="bg"></div>
          <img src={heroImg} alt="heroImage" className='heroImage'/>
        </div>
        </section>
    </div>
  )
}
