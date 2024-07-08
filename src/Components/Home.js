import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../Assets/image1.jpg';
import image2 from '../Assets/image2.jpg';
import image3 from '../Assets/image3.jpg';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Slider {...settings} className='carousel'>
        <div className='image-container'>
          <img src={image1} alt='Image 1' className='carousel-image' />
        </div>
        <div className='image-container'>
          <img src={image2} alt='Image 2' className='carousel-image' />
        </div>
        <div className='image-container'>
          <img src={image3} alt='Image 3' className='carousel-image' />
        </div>
      </Slider>
    </div>
  );
}

export default Home;
