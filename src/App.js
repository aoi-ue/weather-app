import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import Form from './Forms.js'; 
import './App.css';

const dotenv = require('dotenv');
dotenv.config();

const App = () => (
  <Container className="p-3">

    <Jumbotron>
      <h1 className="header">Today's weather</h1>
    <Form /> 

    </Jumbotron>

  </Container>
);

export default App;
