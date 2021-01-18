import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        if (keyword.length > 0) {
          const { data } = await axios.get(
            `/api/products?keyword=${keyword}&pageNumber=1`
          );
          setSearchResults(data.products);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        setSearchResults([]);
      }
    };
    fetchSearchData();
  }, [keyword]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <Form onSubmit={submitHandler} inline className="relative">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
        autoComplete="off"
      ></Form.Control>
      {searchResults.length > 0 && (
        <div className="autocomplete-box">
          <ul>
            {searchResults.map((suggestion) => (
              <li
                key={suggestion._id}
                className="autocomplete-item"
                onClick={() => history.push(`/product/${suggestion._id}`)}
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
