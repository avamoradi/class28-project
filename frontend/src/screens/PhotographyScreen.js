import React, { useEffect, useState } from 'react'
import { Row, Col, Navbar, Container } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import { useDispatch, useSelector } from 'react-redux'
import { listAllProducts } from '../actions/productActions'
import Filtering from '../components/Filtering'
import Sorting from '../components/Sorting'
import { Route } from 'react-router-dom'
import { login } from '../actions/userActions'

const PhotographyScreen = ({ match, history }) => {
  const keyword = match.params.keyword
  const [subject, setSubject] = useState('')
  const [medium, setMedium] = useState('')
  const [location, setLocation] = useState('')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [style, setStyle] = useState('')
  let [sorts, setSort] = useState('')
  const dispatch = useDispatch()
  sorts = match.params.sorts

  const productAll = useSelector((state) => state.productAll)
  const { loading, error, products } = productAll
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  console.log(products)
  useEffect(() => {
    dispatch(
      listAllProducts(
        keyword,
        subject,
        medium,
        location,
        minPrice,
        maxPrice,
        style,
        sorts
      )
    )
    const isOAuth = JSON.parse(localStorage.getItem('isOAuth'))
    if (isOAuth) {
      dispatch(login())
      console.log(isOAuth)
    }
  }, [
    dispatch,
    keyword,
    subject,
    medium,
    location,
    minPrice,
    maxPrice,
    style,
    sorts,
    userInfo,
  ])

  return (
    <>
      <Meta />
      {!keyword}
      <h1 id='latest-art'>Latest Art</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Navbar collapseOnSelect>
            <Container>
              <Filtering
                subject={subject}
                medium={medium}
                location={location}
                setLocation={setLocation}
                style={style}
                setStyle={setStyle}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
              />

              <Route
                render={({ history }) => (
                  <Sorting history={history} sorts={sorts} setSort={setSort} />
                )}
              />
            </Container>
          </Navbar>
          <Row>
            {products.map((product) =>
              product.category === 'Photography' ? (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ) : (
                false
              )
            )}
          </Row>
        </>
      )}
    </>
  )
}

export default PhotographyScreen
