// import { Fade } from "react-slideshow-image";
import image1 from "../../images/me.jpeg";
import image2 from "../../images/me1.jpg";
import image3 from "../../images/me2.jpg";
// import 'react-slideshow-image/dist/styles.css'

// // style was imported in index.css
// // import "react-slideshow-image/dist/styles.css";
// const images = [image1, image2, image3];

// const zoomOutProperties = {
//   duration: 1000,
//   transitionDuration: 100,
//   infinite: true,
//   indicators: true,
//   scale: 0.4,
//   arrows: true
// };

// const Slideshow = () => {
//   return (
//     <div className="slide-container w-16">
//       <Fade>
//         {images.map((fadeImage, index) => (
//           <div key={index} className="text-center">
//             <img style={{ width: '10%' }} src={fadeImage} />
//             {/* <h2>{fadeImage.caption}</h2> */}
//           </div>
//         ))}
//       </Fade>
//     </div>
//   );
// };

// export default Slideshow;


// src/Slideshow.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './Slideshow.css'; // optional, for custom styles

const Slideshow = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false
  };

  return (
    <div className="slideshow-container w-64 h-32 opacity-50">
      <Slider {...settings}>
        <div>
          <img src={image1} className="h-96" alt="Slide 1" />
        </div>
        <div>
          <img src={image2} className="h-96" alt="Slide 2" />
        </div>
        <div>
          <img src={image3} className="h-96"  alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow;
