import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";

import Button from "react-bootstrap/Button";

import icons from "./icons.png";

import Warning from "./Warning.js";

function Forms() {
  const [location, setLocation] = useState({
    country: "",
    city: "",
  });

  const [weather, setWeather] = useState('N/A');

  const [condition, setCondition] = useState([]);

  const [visible, setVisible] = useState(false);

  const fetchData = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location.country},${location.city}&appid=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();

    if (data.cod !== 200) {
      console.log("err");
      setVisible(true);
    } else {
      setCondition(data.main);
      setWeather(data.weather[0].description); 
      setVisible(false);
    }
  };

  useEffect(() => {
    console.log("render");
  }, []);

  const handleChange = (e) => {
    setLocation((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (location.city !== "") {
      fetchData();  
    }
    // alert("A name was submitted: " + location.country + location.city);
  };

  return (
    <Container>
      {visible ? <Warning onClose={()=> setVisible(false)} /> : null}

      <Form inline onSubmit={handleSubmit}>
        <Row className="justify-content-md-center">
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
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      <Row>
        <Col xs={6} md={4}>
          {/* <Image src={icons} rounded /> */}
          <p> {console.log(weather)} </p> 
        </Col>
      </Row>

      <Row>
        <p>
          Temperature:
          {condition 
            ? `${Math.round(condition.temp_min - 273.15)} °C ~  ${Math.round(
                condition.temp_max - 273.15
              )} °C`
            : "nothing here"}
        </p>
      </Row>

      <Row>
        <p>
          Humidity:
          {condition ? condition.humidity + "%" : "nothing here"}
        </p>
      </Row>
    </Container>
  );
}

export default Forms;
