import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import styles from './Carousel.module.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className='' >
      <Slider {...settings}>
        <div>
          <img src="./Banner2.jpg" alt="Slide 1"  />
        </div>
        <div>
          <img src="./Banner1.jpg" alt="Slide 2" />
        </div>
        {/* <div>
          <img src="/images/slide3.jpg" alt="Slide 3" className={styles.slideImage} />
        </div> */}
      </Slider>
    </div>
  );
};

export default Carousel;
