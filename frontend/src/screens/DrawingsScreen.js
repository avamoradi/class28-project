import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listAllProducts } from '../actions/productActions'

const DrawingScreen = ({ match, history }) => {
  const dispatch = useDispatch()
  const productAll = useSelector((state) => state.productAll)
  const { loading, error, products } = productAll

  useEffect(() => {
    dispatch(listAllProducts())
  }, [dispatch])

  return (
    <>
      <h1 className='h1-category'>Original Drawings For Sale</h1>
      <p className='p-category'>
        Choose from a wide-ranging selection of original drawings and prints
        ranging in subject, style and media from figurative to abstract,
        monochromatic to multicoloured, and charcoal to pencil.
      </p>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) =>
              product.category === 'Drawing' ? (
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

export default DrawingScreen
