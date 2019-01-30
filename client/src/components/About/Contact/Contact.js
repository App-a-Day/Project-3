import React from "react";
import { Card, CardImg, Row, Col, CardText } from "reactstrap";

import "./Contact.css";

const Contact = props => {
  return (
    <div>
      <Row>
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="../assets/images/team-2.jpg"
              alt="Card image cap"
            />
          </Card>
        </Col>

        <Col sm="6">
          <Card body>
            <CardText style={{ fontSize: "15px" }}>
              {/* <div>512 299 2329</div>
              <div>HELLO@APPADAY.COM</div>
              <div>110 INNER CAMPUS DRIVE</div>
              <div>AUSTIN, TX 78712</div> */}

              <i className="fab fa-twitter-square fa-3x" />
              <i className="fab fa-linkedin fa-3x" />
              <i className="fab fa-facebook-square fa-3x" />
              <i className="fab fa-youtube-square fa-3x" />
            </CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
