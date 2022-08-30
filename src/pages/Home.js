import React from "react";
import imageOne from "../assets/images/apple-image-one.png";
import imageTwo from "../assets/images/apple-image-two.png";
import imageThree from "../assets/images/apple-image-three.png";
import imageFour from "../assets/images/apple-image-four.png";
import imageFive from "../assets/images/apple-image-five.png";
import imageSix from "../assets/images/apple-image-six.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Home = () => {
  return (
    <>
      <div className="col-12 text-center">
        <h2 className="my-3">iPhones</h2>
        <hr />
      </div>
      <Carousel infiniteLoop autoPlay showStatus= {false}>
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
    </>
  );
};

export default Home;
