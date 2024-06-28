import React from "react";
import Slider from "react-slick";
import {
  HomeWrapper,
  Title,
  Subtitle,
  CarouselWrapper,
  CarouselImage,
} from "./Home.styles";
import profileImage1 from "../../assets/images/profile1.jpeg";
import profileImage2 from "../../assets/images/profile2.jpeg";
import profileImage3 from "../../assets/images/profile3.jpeg";
import profileImage4 from "../../assets/images/profile4.jpeg";
import profileImage5 from "../../assets/images/profile5.jpeg";
import profileImage6 from "../../assets/images/profile6.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
  };

  const handleImageClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const images = [
    profileImage1,
    profileImage2,
    profileImage3,
    profileImage4,
    profileImage5,
    profileImage6,
  ];

  return (
    <HomeWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Title
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        Welcome to My Portfolio
      </Title>
      <h1>Silvio dos Santos Junior</h1>
      <CarouselWrapper>
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index} onClick={() => handleImageClick(index)}>
              <CarouselImage src={image} alt={`Profile ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </CarouselWrapper>
      <Subtitle
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        Full Stack Developer | React | Firebase
      </Subtitle>
    </HomeWrapper>
  );
};

export default Home;
