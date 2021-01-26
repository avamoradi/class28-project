import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const homeSliderImages = [
  {
    title: 'painting',
    subtitle: 'Fine Art Painting',
    img: 'images/home-slider-painting.jpg',
  },
  {
    title: 'sculpture',
    subtitle: 'Realistic Sculpture',
    img: 'images/home-slider-sculpture.jpg',
  },
  {
    title: 'installation',
    subtitle: 'Modern Installation',
    img: 'images/home-slider-installation.jpg',
  },
  {
    title: 'photography',
    subtitle: 'Black and White Photography',
    img: 'images/home-slider-photography.jpg',
  },
]

const HomeSlider = () => {
  const [currentImg, setCurrentImg] = useState(0)
  return (
    <div className='home-slider'>
      <div
        className='home-slider-inner'
        style={{ backgroundImage: `url(${homeSliderImages[currentImg].img})` }}
      >
        <div
          className='left'
          onClick={() => {
            if (currentImg === 0) {
              setCurrentImg(3)
            } else {
              setCurrentImg(currentImg - 1)
            }
          }}
        >
          <i className='fas fa-angle-left'></i>
        </div>
        <div className='center'>
          <h1>Curated artwork verified by experts</h1>
          <Button>Buy now</Button>
        </div>
        <div
          className='right'
          onClick={() => {
            if (currentImg === 3) {
              setCurrentImg(0)
            } else {
              setCurrentImg(currentImg + 1)
            }
          }}
        >
          <i className='fas fa-angle-right'></i>
        </div>
      </div>
    </div>
  )
}

export default HomeSlider
