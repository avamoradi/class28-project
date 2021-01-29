<<<<<<< HEAD
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import HomeSlider from '../components/HomeSlider'
import AboutGalileo from '../components/AboutGalileo'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])
=======
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Filtering from '../components/Filtering';
import Sorting from "../components/Sorting";
import { Route } from "react-router-dom";




const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [color, setColor] = useState("");
  const [sort, setSort] =useState("");
  const dispatch = useDispatch();
  //const sort = match.params.sort;
  console.log(sort);
  
  const pageNumber = match.params.pageNumber || 1;

  
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  
  
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber, location, minPrice, maxPrice, color, sort));

  }, [dispatch, keyword, pageNumber, location, minPrice, maxPrice, color, sort]);
>>>>>>> 107c7a42bc5767bbb5ead8c4bce0d2db6dd3cf26

  return (
    <>
      <Meta />
<<<<<<< HEAD
      <HomeSlider />
      <AboutGalileo />
      {!keyword ? (
=======
      {!keyword || !location || !minPrice || !maxPrice || !color || !sort  ? (
>>>>>>> 107c7a42bc5767bbb5ead8c4bce0d2db6dd3cf26
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1 id='latest-art'>Latest Art</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row > 
              <Filtering 
                location={location}
                setLocation={setLocation}
                color={color}
                setColor={setColor}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
              />  
              
          </Row>
          <Row>
          {/* <Route render={({ history }) => <Sorting history={history} />} /> */}
            <Sorting 
              sort={sort}
              setSort={setSort}
              />
          </Row>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
