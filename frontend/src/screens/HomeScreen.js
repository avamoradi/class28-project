import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Navbar, Container } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import CookiePopup from "../components/CookiePopup";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Filtering from "../components/Filtering";
import Sorting from "../components/Sorting";
import { Route } from "react-router-dom";
import HomeSlider from "../components/HomeSlider";
import AboutGalileo from "../components/AboutGalileo";
import { login } from "../actions/userActions";
const HomeScreen = ({ match, history }) => {
  const keyword = match.params.keyword;
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [style, setStyle] = useState("");
  let [sorts, setSort] = useState("");
  const dispatch = useDispatch();
  sorts = match.params.sorts;

  const cookiesFromStorage = localStorage.getItem("isCookies")
    ? JSON.parse(localStorage.getItem("isCookies"))
    : true;

  const [cookiePopup, setCookiePopup] = useState(cookiesFromStorage);

  const pageNumber = match.params.pageNumber || 1;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    localStorage.setItem("isCookies", cookiePopup);
    dispatch(
      listProducts(
        keyword,
        pageNumber,
        location,
        minPrice,
        maxPrice,
        style,
        sorts
      )
    );
    const isOAuth = JSON.parse(localStorage.getItem("isOAuth"));
    if (isOAuth) {
      dispatch(login());
      console.log(isOAuth);
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
    cookiePopup,
    userInfo,
  ]);

  return (
    <>
      {cookiePopup && <CookiePopup show={true} onHide={setCookiePopup} />}
      <Meta />
      {!keyword ? (
        <>
          <HomeSlider />
          <AboutGalileo />
          <ProductCarousel />
        </>
      ) : (
        <Link to='/' className='btn btn-light'>
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
          <Navbar collapseOnSelect>
            <Container className='d-flex justify-content-even'>
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
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
