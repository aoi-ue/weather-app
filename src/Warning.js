import React, { useState } from 'react'; 

import Alert from 'react-bootstrap/Alert'; 

function Warning(props) {
    const [show, setShow] = useState(props.found);
  
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Not city found! </Alert.Heading>
        </Alert>
      );
    }
    return null; 
}; 


export {Warning}; 