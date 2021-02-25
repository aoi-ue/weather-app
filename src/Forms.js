import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";

import Button from "react-bootstrap/Button";

function Forms() {
  const [location, setLocation] = useState({
    country: "",
    city: "",
  });

  const [condition, setCondition] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${location.country},${location.city}&appid=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setCondition(data.main);
    };

    console.log(condition);

    fetchData();
  }, [location]);

  const handleChange = (e) => {
    setLocation((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("A name was submitted: " + location.country + location.city);
  };

  return (
    <Container>
      <Form inline onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Label htmlFor="Country" srOnly>
              Country
            </Form.Label>
            <Form.Control
              className="mb-2 mr-sm-2"
              type="text"
              // name="country"
              placeholder="Country"
              id="country"
              value={location.country}
              onChange={handleChange}
            />
          </Col>

          <Col>
            <Form.Label htmlFor="City" srOnly>
              Country
            </Form.Label>
            <Form.Control
              className="mb-2 mr-sm-2"
              type="text"
              placeholder="City"
              // name="country"
              id="city"
              value={location.city}
              onChange={handleChange}
            />
          </Col>

          <Col>
            <Button type="submit" className="mb-2">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Forms;
