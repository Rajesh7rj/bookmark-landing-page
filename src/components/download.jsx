import React from 'react'
import chrome from "../images/logo-chrome.svg"
import firefox from "../images/logo-firefox.svg"
import opera from "../images/logo-opera.svg"
import dot from "../images/bg-dots.svg"

const data = [
  {
    id:1,
    image:chrome,
    addTo : "Add to Chrome",
    version : "Minimum version 62",
    button : "Add & Install Extension",
    margin : "marginChrome",
  },

  {
    id:2,
    image:firefox,
    addTo : "Add to Firefox",
    version : "Minimum version 55",
    button : "Add & Install Extension",
    margin : "marginFirefox",
  },

  {
    id:3,
    image:opera,
    addTo : "Add to Opera",
    version : "Minimum version 46",
    button : "Add & Install Extension",
    margin : "marginOpera",
  }
]

export default function Download() {
  return (
    <div>
      <section className="section3">
        <div className="sec3-info">
          <h2 className='sec3-heading'> Download the extension</h2>
          <p className="sec3-text">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
        </div>


        <div className="extension">
          {
            data.map(({id, image, addTo, version, button, margin})=>(
              <div key={id} className={"browserBox  " + (margin)  }>
                <img className='browserImg' src={image} alt="Browser Logo" />
                <h3 className="addTo">{addTo}</h3>
                <p className="version">{version}</p>
                <img src={dot} className='dotted-line' alt=''></img>
                <button className="install">{button}</button>
              </div>
              ))
          }
         
        </div>
      </section>
    </div>
  )
}
