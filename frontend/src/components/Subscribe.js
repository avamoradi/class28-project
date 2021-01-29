import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import axios from "axios";
import { updateUserLogin } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo: user } = userLogin;

  useEffect(() => {
    setTimeout(() => {
      setError(null);
      setMessage(null);
    }, 3000);
    if (user && !user.newsletterSubscription) {
      setEmail(user.email);
    }
  }, [error, message, user]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    if (email?.trim()) {
      try {
        setLoading(true);
        const { data } = await axios.post("/api/users/subscribe", {
          email: email.trim(),
        });
        setMessage(data.message);
      } catch (error) {
        setError(error.response.data.message);
      }
      setLoading(false);
      if (user) {
        dispatch(updateUserLogin());
      }
    } else {
      setError("Fill in e-mail");
    }
  };

  return !user?.newsletterSubscription ? (
    <div className="subscribe">
      <h3>Subscribe to newsletter</h3>
      {loading && <p>Loading...</p>}
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
    <div className="text-center py-3">
      <Link to={`/unsubscribe`}>Unsubscribe</Link>
    </div>
  );
};

export default Subscribe;
