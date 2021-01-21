import React from 'react'
import { Jumbotron, Col, Image } from 'react-bootstrap'

const SellScreen = () => {
  return (
    <>
      <Jumbotron>
        <div className='jumbotron-background-image'>
          <h1>Sell your art to a global community of art lovers</h1>
          <p>
            Expand awareness of your artwork across new channels, while managing
            it all from one place.
          </p>
          <p>
            Choose how and when you get paid. We offer secure payments by check,
            wire transfer or PayPal. Our support specialists ensure our artists
            and collectors are financially protected on every sale.
          </p>
        </div>
      </Jumbotron>
      <Col>
        <Image src='/images/artist.jpg' alt='artist' fluid />
      </Col>
    </>
  )
}

export default SellScreen
