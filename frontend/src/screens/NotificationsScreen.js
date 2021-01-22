import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  listNotification,
  deleteNotification,
} from "../actions/notificationsActions";

const NotificationsScreen = ({ history }) => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const notificationsList = useSelector((state) => state.notificationsList);
  const { loading, error, notifications } = notificationsList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      dispatch(listNotification());
    }
  }, [toggle, dispatch, history, userInfo]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      {notifications.length > 0 ? (
        notifications.map((not) => (
          <Card key={not._id} className="m-3">
            <Row>
              <Col sm={9} md={9} lg={10} className="p-1">
                <Link to={`/product/${not.product}`}>
                  <Card.Body>
                    <Card.Title className="m-0">{not.message}</Card.Title>
                  </Card.Body>
                </Link>
              </Col>
              <Col className="p-2 mx-3 my-auto text-right">
                <Button
                  variant="primary"
                  onClick={() => {
                    dispatch(deleteNotification(not._id));
                    return setToggle(!toggle);
                  }}
                >
                  x
                </Button>
              </Col>
            </Row>
          </Card>
        ))
      ) : (
        <Message>
          You don't have any notification <Link to="/">Go Back</Link>
        </Message>
      )}
    </>
  );
};

export default NotificationsScreen;
