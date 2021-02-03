import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel, Button } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listRandomProducts } from '../actions/productActions'
import { HashLink } from 'react-router-hash-link'

/*
import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Carousel, Button } from 'react-bootstrap'

const sliderImages = [
  {
    title: 'painting',
    subtitle: 'Fine Art Painting',
    img: 'images/home-slider-painting.jpg',
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
*/

const HomeSlider = () => {
  const dispatch = useDispatch()
  const productRandom = useSelector((state) => state.productRandom)
  const { loading, error, products } = productRandom

  useEffect(() => {
    dispatch(listRandomProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <div
            className='home-slider-inner'
            style={{
              backgroundImage: `url(${product.image})`,
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
  )
}
export default HomeSlider
