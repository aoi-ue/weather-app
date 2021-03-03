import React from 'react'; 

import Alert from 'react-bootstrap/Alert'; 

function Warning(props) {
    return (
      <Alert variant="danger" onClose={props.onClose} dismissible>
        <Alert.Heading> Not city found! </Alert.Heading>
      </Alert>
    );
}; 

export default Warning; 