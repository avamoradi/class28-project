import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Filtering from '../components/Filtering';
import Sorting from "../components/Sorting";
import { Route } from "react-router-dom";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  let [sorts, setSort] =useState("");
  sorts = match.params.sorts;

  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [style, setStyle] = useState("");
  
  console.log(location);

  const dispatch = useDispatch();
  
  const pageNumber = match.params.pageNumber || 1;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber, location, minPrice, maxPrice, style, sorts));
    
  }, [dispatch, keyword, pageNumber, location, minPrice, maxPrice, style, sorts]);


  return (
    <>
      <Meta />
      {!keyword || !location || !minPrice || !maxPrice || !style || !sorts  ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light" >

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
          <Row > 
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
              
          </Row>
          <Row>
          <Route render={({ history }) => 
          <Sorting 
            history={history} 
            sorts={sorts} 
            setSort={setSort}/>} 
            />
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
