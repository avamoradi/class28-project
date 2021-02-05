import React, { useEffect, useState } from 'react'
import { Row, Col, Navbar, Container } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Filtering from '../components/Filtering'
import PhotographyFiltering from '../components/PhotographyFiltering'
import Sorting from '../components/Sorting'
import { Route } from 'react-router-dom'
import { login } from '../actions/userActions'

const PhotographyScreen = ({ match, history }) => {
  const keyword = match.params.keyword
  const [location, setLocation] = useState('')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [style, setStyle] = useState('')
  const [subject, setSubject] = useState('')
  const [medium, setMedium] = useState('')
  let [sorts, setSort] = useState('')
  const dispatch = useDispatch()
  sorts = match.params.sorts

  const pageNumber = match.params.pageNumber || 1

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  useEffect(() => {
    dispatch(
      listProducts(
        keyword,
        pageNumber,
        location,
        minPrice,
        maxPrice,
        style,
        subject,
        medium,
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
    pageNumber,
    location,
    minPrice,
    maxPrice,
    style,
    subject,
    medium,
    sorts,
    userInfo,
  ])
  return (
    <>
      <Meta />
      {!keyword}
      <h1 className='category-h1'>Original Paintings For Sale</h1>
      <p className='category-p'>
        Whether you are looking for an original painting or a high quality art
        print, Galileo has many original paintings for sale from emerging
        artists around the world.
      </p>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Navbar collapseOnSelect>
            <Container>
              <PhotographyFiltering
                subject={setSubject}
                setSubject={setSubject}
                medium={setMedium}
                setMedium={setMedium}
              />
              <Filtering
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
