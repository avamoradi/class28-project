import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Message from "../components/Message";
import axios from "axios";
import { getUserDetails } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (message) {
      dispatch(getUserDetails("profile"));
    }
    setTimeout(() => {
      setError(null);
      setMessage(null);
    }, 3000);
  }, [error, message, dispatch]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    if (email.trim()) {
      try {
        const { data } = await axios.post("/api/users/subscribe", {
          email: email.trim(),
        });
        setMessage(data.message);
        setEmail("");
      } catch (error) {
        setError(error.response.data.message);
      }
    } else {
      setError("Fill in e-mail");
    }
  };

  return userInfo && !userInfo.newsletterSubscription ? (
    <div className="subscribe">
      <h3>Subscribe to newsletter</h3>
      {message ? (
        <Message>{message}</Message>
      ) : (
        <Form onSubmit={submitHandler} inline>
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail..."
            value={email}
          ></Form.Control>
          <Button type="submit" variant="outline-success" className="p-2">
            Subscribe
          </Button>
        </Form>
      )}

      <div className="subscription-error">
        {error && <Message variant="danger">{error}</Message>}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Subscribe;
