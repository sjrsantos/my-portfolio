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
        <Slider {...settings}>
          <div>
            <CarouselImage src={profileImage1} alt="Profile 1" />
          </div>
          <div>
            <CarouselImage src={profileImage2} alt="Profile 2" />
          </div>
          <div>
            <CarouselImage src={profileImage3} alt="Profile 3" />
          </div>
          <div>
            <CarouselImage src={profileImage4} alt="Profile 4" />
          </div>
          <div>
            <CarouselImage src={profileImage5} alt="Profile 5" />
          </div>
          <div>
            <CarouselImage src={profileImage6} alt="Profile 6" />
          </div>
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
