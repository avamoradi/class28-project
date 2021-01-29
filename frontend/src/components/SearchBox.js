import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useGAEventTracker } from '../analytic'

const SearchBox = ({ history }) => {
  const GAEventsTracker = useGAEventTracker('Search for item')

  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    GAEventsTracker('Clicked on search bar')
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }
  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
