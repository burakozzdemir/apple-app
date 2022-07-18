import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imageOne from "../assets/images/apple-image-one.png";
import imageTwo from "../assets/images/apple-image-two.png";
import imageThree from "../assets/images/apple-image-three.png";
import imageFour from "../assets/images/apple-image-four.png";
import imageFive from "../assets/images/apple-image-five.png";
import imageSix from "../assets/images/apple-image-six.png";
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* <h1 style={{ fontSize: "50px" }}>Iphone 13</h1>
      <h2>Super Power</h2>
      <Link to="/">More Information</Link>
      <Link to="/">Pre Order</Link> */}
      <Carousel infiniteLoop autoPlay>
        <div className="image">
          <img src={imageOne} alt="" />
        </div>
        <div className="image">
          <img src={imageTwo} alt="" />
        </div>
        <div className="image">
          <img src={imageThree} alt="" />
        </div>
        <div className="image">
          <img src={imageFour} alt="" />
        </div>
        <div className="image">
          <img src={imageFive} alt="" />
        </div>
        <div className="image">
          <img src={imageSix} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
