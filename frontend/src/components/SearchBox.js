import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import useDebounce from '../hooks/useDebounce'


const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const debouncedKeyword = useDebounce(keyword, 300)

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        if (debouncedKeyword.length > 0 && debouncedKeyword !== ' ') {
          const { data } = await axios.get(
            `/api/products?keyword=${debouncedKeyword}&pageNumber=1`
          )
          setSearchResults(data.products)
        } else {
          setSearchResults([])
        }
      } catch (error) {
        setSearchResults([])
      }
    }
    fetchSearchData()
  }, [debouncedKeyword])

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
<<<<<<< HEAD
  };

=======
  }
>>>>>>> development
  return (
    <Form onSubmit={submitHandler} inline className='relative'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
<<<<<<< HEAD
        
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2" >
        Search
      </Button>
=======
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
        autoComplete='off'
        value={keyword}
        onBlur={() => setSearchResults([])}
      ></Form.Control>
      {searchResults.length > 0 && (
        <div className='autocomplete-box'>
          <ul>
            {searchResults.map((suggestion) => (
              <li
                key={suggestion._id}
                className='autocomplete-item'
                onMouseDown={() => history.push(`/product/${suggestion._id}`)}
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Button type='submit'>Search</Button>

>>>>>>> development
    </Form>
  )
}

export default SearchBox
