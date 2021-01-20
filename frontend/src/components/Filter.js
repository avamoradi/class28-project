import React, { useState } from "react";
import { Form, Row } from "react-bootstrap";

const Filter = ({
  location,
  setLocation,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  color,
  setColor,
}) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Row>
        <h5 className="m-2">Filter by</h5>
        <Form onSubmit={submitHandler} inline>
          <Form.Control
            as="select"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            <option value="Amsterdam">Amsterdam</option>
            <option value="Utrecht">Utrecht</option>
            <option value="Rotterdam">Rotterdam</option>
            <option value="The Hague">The Hague</option>
          </Form.Control>
          <h5 className="m-2 ml-5">Price</h5>
          <Form.Control
            as="select"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          >
            <option value={0}>0</option>
            <option value={100}>100</option>
            <option value={200}>200</option>
            <option value={300}>300</option>
            <option value={500}>500</option>
          </Form.Control>
          <h5 className="m-2">Until</h5>
          <Form.Control
            as="select"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          >
            <option value={Infinity}>All prices</option>
            <option value={100}>100</option>
            <option value={200}>200</option>
            <option value={300}>300</option>
            <option value={400}>400</option>
            <option value={500}>500</option>
            <option value={600}>600</option>
            <option value={Infinity}>700&more </option>
          </Form.Control>
          <h5 className="m-2 ml-5">Color</h5>
          <Form.Control
            as="select"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="">All Colors</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
          </Form.Control>
        </Form>
      </Row>
    </>
  );
};

export default Filter;
