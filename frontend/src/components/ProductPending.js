import React, { useEffect } from "react";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Meta from "./Meta";
import { verifyProduct } from "../actions/productActions";

const ProductPending = ({ product, history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const notificationsList = useSelector((state) => state.notificationsList);
  const { notifications } = notificationsList;

  const dispatch = useDispatch();

  const verifyArt = (id) => {
    const notificationId = notifications.filter(
      (not) => not.product === product._id
    );
    //notificationId[0]; to remove this notification from other experts
    dispatch(verifyProduct(id, notificationId[0]._id));
  };

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [userInfo, history]);

  return userInfo && userInfo.isExpert ? (
    <>
      <h1>pending</h1>
      <Meta title={product.name} />
      <Row>
        <Col>
          <ListGroup.Item className="my-2">
            <Row>
              <Col xs={8} sm={9} md={9} lg={10} className="align-middle">
                <h4 className="my-2 py-1">This item is pending</h4>
              </Col>
              {userInfo._id !== product.user && (
                <Col xs={2} className="my-auto text-right">
                  <Button
                    variant="success"
                    type="button"
                    onClick={() => verifyArt(product._id)}
                  >
                    Verify
                  </Button>
                </Col>
              )}
            </Row>
          </ListGroup.Item>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  ) : (
    <Message>This item is not available yet</Message>
  );
};

export default ProductPending;
