import React from "react";
import { HashLink } from "react-router-hash-link";
import { Carousel, Button } from "react-bootstrap";

const sliderImages = [
  {
    title: "painting",
    subtitle: "Fine Art Painting",
    img: "images/home-slider-painting.jpg",
  },
  {
    title: "installation",
    subtitle: "Modern Installation",
    img: "images/home-slider-installation.jpg",
  },
  {
    title: "photography",
    subtitle: "Black and White Photography",
    img: "images/home-slider-photography.jpg",
  },
];

const HomeSlider = () => {
  return (
    <Carousel pause='hover'>
      {sliderImages.map((image) => (
        <Carousel.Item key={image.title}>
          <div
            className='home-slider-inner'
            style={{
              backgroundImage: `url(${image.img})`,
            }}
          ></div>
          <Carousel.Caption className='carousel-caption'>
            <h1 className='slider-title'>
              Curated artwork verified by experts
            </h1>
            <HashLink to='/#latest-art'>
              <Button className='buy-art'>Buy Art</Button>
            </HashLink>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default HomeSlider;
