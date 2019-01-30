import React from 'react';
import { Card, CardImg, Row, Col, CardTitle, CardText } from 'reactstrap';

const Pics = (props) => {
  return (

     <Row>
       <Col>
      <Card>
        <CardImg  width="100%" src="../assets/images/pics1.jpg" alt="Card image cap" />
        
      </Card>
      </Col>

     
      <Col sm="6">
        <Card body>
          <CardTitle style={{fontSize: "35px", paddingTop: "50px"}}>How this app works</CardTitle>
          <CardText style={{fontSize: "25px"}}>Scroll down to start coding with our app code editor, beginning with Lesson 1. Sign in to access additional resources, such as video tutorials, and advice from other friendly coders.</CardText>        
        </Card>
      </Col>
      </Row>
      
    
  );
};

export default Pics;