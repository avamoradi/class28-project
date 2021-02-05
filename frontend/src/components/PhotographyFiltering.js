import React from 'react'
import { Form, Col } from 'react-bootstrap'

const PhotographyFiltering = ({ subject, setSubject, medium, setMedium }) => {
  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Row className='align-items-center'>
        <Col xs='auto' className='my-1'>
          <Form.Label
            className='mr-sm-2'
            htmlFor='inlineFormCustomSelect'
            srOnly
          >
            Preference
          </Form.Label>
          <Form.Control
            as='select'
            className='mr-sm-2'
            id='inlineFormCustomSelect'
            custom
            label='Filtering'
            title='Subject'
            value={subject}
            checked
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value=''>Subject...</option>
            <option value='Abstract'>Abstract</option>
            <option value='Landscape'>Landscape</option>
            <option value='Nature'>Nature</option>
            <option value='Architecture'>Architecture</option>
            <option value='People'>People</option>
            <option value='Nude'>Nude</option>
            <option value='Portrait'>Portrait</option>
            <option value='Cities'>Cities</option>
            <option value='Animal'>Animal</option>
            <option value='Floral'>Floral</option>
            <option value='Travel'>Travel</option>
            <option value='Botanic'>Botanic</option>
          </Form.Control>
        </Col>
      </Form.Row>

      <Form.Row className='align-items-center'>
        <Col xs='auto' className='my-1'>
          <Form.Label
            className='mr-sm-2'
            htmlFor='inlineFormCustomSelect'
            srOnly
          >
            Preference
          </Form.Label>
          <Form.Control
            as='select'
            className='mr-sm-2'
            id='inlineFormCustomSelect'
            custom
            label='Filtering'
            title='Medium'
            value={medium}
            checked
            onChange={(e) => setMedium(e.target.value)}
          >
            <option value=''>Medium...</option>
            <option value='Acrylic'>Digital</option>
            <option value='Oil'>Color</option>
            <option value='Watercolor'>Photo</option>
            <option value='Black-and-White'>Black White</option>
            <option value='Manipulated'>Manipulated</option>
          </Form.Control>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default PhotographyFiltering
