import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import CookiePopup from '../components/CookiePopup'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Filtering from '../components/Filtering'
import Sorting from '../components/Sorting'
import { Route } from 'react-router-dom'
import HomeSlider from '../components/HomeSlider'
import AboutGalileo from '../components/AboutGalileo'
import { login } from '../actions/userActions'

const HomeScreen = ({ match, history }) => {
  const keyword = match.params.keyword
  const [location, setLocation] = useState('')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [color, setColor] = useState('')
  const [sort, setSort] = useState('')
  const dispatch = useDispatch()
  //const sort = match.params.sort;

  const cookiesFromStorage = localStorage.getItem('isCookies')
    ? JSON.parse(localStorage.getItem('isCookies'))
    : true

  const [cookiePopup, setCookiePopup] = useState(cookiesFromStorage)

  const pageNumber = match.params.pageNumber || 1

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  useEffect(() => {
    localStorage.setItem('isCookies', cookiePopup)
    dispatch(
      listProducts(
        keyword,
        pageNumber,
        location,
        minPrice,
        maxPrice,
        color,
        sort
      )
    )
    if (!userInfo) dispatch(login())
  }, [
    dispatch,
    keyword,
    pageNumber,
    location,
    minPrice,
    maxPrice,
    color,
    sort,
    cookiePopup,
    userInfo,
  ])

  return (
    <>
      {cookiePopup && <CookiePopup show={true} onHide={setCookiePopup} />}
      <Meta />
      <HomeSlider />
      <AboutGalileo />
      {!keyword || !location || !minPrice || !maxPrice || !color || !sort ? (
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
          <Row>
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
            <Sorting sort={sort} setSort={setSort} history={history} />
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
