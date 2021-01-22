import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup } from "react-bootstrap";
import { listNotification } from "../actions/notificationsActions";
const NotificationsScreen = () => {
  const notificationsList = useSelector((state) => state.notificationsList);
  const noti = notificationsList.notificationsList;
  const dispatch = useDispatch();
  // console.log(noti);
  useEffect(() => {
    dispatch(listNotification());
  }, [dispatch]);
  return (
    <div>
      NotificationsScreen
      {/* <p>{JSON.stringify(noti)}</p> */}
      <ListGroup>
        {/* {noti.map((item) => {
          <ListGroup.Item>{JSON.stringify(item)}</ListGroup.Item>;
        })} */}
      </ListGroup>
    </div>
  );
};

export default NotificationsScreen;
