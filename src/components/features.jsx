import React,{useState} from 'react';
import image1 from "../images/illustration-features-tab-1.svg"
import image2 from "../images/illustration-features-tab-2.svg"
import image3 from "../images/illustration-features-tab-3.svg"


const data = [
  {
  id:1,
  button:  "Simple Bookmarking",
  title:"Bookmark in one click",
  description:"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  link:"More Info",
  image:image1, 
},

{
  id:2,
  button:  "Speedy Searching",
  title:"Intelligent search",
  description:" Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  link:"More Info",
  image:image2, 
},

{
  id:3,
  button:  "Easy Sharing",
  title:"Share your bookmarks",
  description:"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  link:"More Info",
  image:image3, 
}

]




export default function Features() {

  

  const [slides] = useState(data);
  const [value, setValue] = useState(0);

  const {title, description, link, image} = slides[value];

  return (
    <div>
     <section className='section2'>
      <div className="features">
        <h2 className="sec2-heading">Features</h2>
        <p className="sec2-text">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        
      </div>


      <div className="chnageSlide">
        <ul className="slide">
       
        {
          slides.map((slide, index) => (
            <li  key={slide.id} onClick={() => setValue(index)} >
              <button  className={"slideButton  " + (index === value && "slideN")}>{slide.button}</button>
            </li>
          ))
        }
        </ul>

        <div className='slideContent'>
          <div className="slideImg">
            <img className='slideImage' src={image} alt="slideImage" />
          </div>
          <div className="slideInfo">
            <h2 className='slideHeading'>{title}</h2>
            <p className='slideText'>{description}</p>
            <button className="moreInfo">{link}</button>
          </div>
        </div>

      </div>
      </section> 
    </div>
  )
}
