import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../css/Carousel.module.css';
import Banner1 from '../img/img-carousel/Banner1.jpg';
import Banner2 from '../img/img-carousel/Banner2.jpg';
import Banner3 from '../img/img-carousel/Banner3.jpg';

const MyCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    carouselRef.current.slickGoTo(0);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings} ref={carouselRef} className={styles.carousel}>
        <div className={styles.carouselItem}>
          <img src={Banner1} alt="Slide 1" className={styles.carouselImage} />
          <p className={`legend ${styles.carouselLegend}`}>Banner 1</p>
        </div>
        <div className={styles.carouselItem}>
          <img src={Banner2} alt="Slide 2" className={styles.carouselImage} />
          <p className={`legend ${styles.carouselLegend}`}>Banner 2</p>
        </div>
        <div className={styles.carouselItem}>
          <img src={Banner3} alt="Slide 3" className={styles.carouselImage} />
          <p className={`legend ${styles.carouselLegend}`}>Banner 3</p>
        </div>
      </Slider>
    </div>
  );
};

export default MyCarousel;
