import React from "react";
import image from "../galaxy.jpg";
import "./Main.css";

const Home = () => {
  return (
    <div>
      <main id="home">
        {/* <div className="hero"> */}
        {/* <img src={image} alt="computer" className="object-cover w-full h-full"/> */}
        {/* <svg className="object-cover w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points= "0, 100, 100, 0, 100, 100"/>
          </svg> */}
        <svg  className="object-cover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,0L48,37.3C96,75,192,149,288,176C384,203,480,181,576,176C672,171,768,181,864,202.7C960,224,1056,256,1152,272C1248,288,1344,288,1392,288L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

       
        {/* </div> */}
        
      </main>
      
    </div>
  );
};

export default Home;
