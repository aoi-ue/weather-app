import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import Form from './Forms.js'; 
import './App.css';

const dotenv = require('dotenv');
dotenv.config();
// console.log(`Your port is ${process.env.REACT_APP_API_KEY}`); 

// const ExampleToast = ({ children }) => {
//   const [show, toggleShow] = useState(true);

//   return (
//     <>
//       {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
//       <Toast show={show} onClose={() => toggleShow(false)}>
//         <Toast.Header>
//           <strong className="mr-auto">React-Bootstrap</strong>
//         </Toast.Header>
//         <Toast.Body>{children}</Toast.Body>
//       </Toast>
//     </>
//   );
// };

const App = () => (
  <Container className="p-3">

    <Jumbotron>
      <h1 className="header">Today's weather</h1>
    <Form /> 

    </Jumbotron>

  </Container>
);

export default App;
