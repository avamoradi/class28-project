import React, { useEffect, useState } from 'react'
import { Row, Col, Navbar, Container } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import Filtering from '../components/Filtering'
import Sorting from '../components/Sorting'
import { Route } from 'react-router-dom'
import { login } from '../actions/userActions'
import { listAllProducts } from '../actions/productActions'
import { listProducts } from '../actions/productActions'

const PaintingScreen = ({ match, history }) => {
  const keyword = match.params.keyword
  const [location, setLocation] = useState('')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [style, setStyle] = useState('')
  let [sorts, setSort] = useState('')
  const dispatch = useDispatch()
  sorts = match.params.sorts

  const pageNumber = match.params.pageNumber || 1

  const productAll = useSelector((state) => state.productAll)
  const {
    loading: loadingAll,
    error: errorAll,
    products: productsAll,
  } = productAll

  useEffect(() => {
    dispatch(listAllProducts())
  }, [dispatch])

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
        sorts
      ),
      listProducts()
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
    sorts,
    userInfo,
  ])

  return (
    <>
      {!keyword || !location || !minPrice || !maxPrice || !style || !sorts}
      <h1 className='h1-category'>Original Paintings For Sale</h1>
      <p className='p-category'>
        Galileo has over a thousand original paintings for sale from emerging
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
              product.category === 'Painting' ? (
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

export default PaintingScreen
