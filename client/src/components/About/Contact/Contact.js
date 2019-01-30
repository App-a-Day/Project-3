import React from 'react';
import { Card, CardImg, Row, Col, CardText } from 'reactstrap';

import './Contact.css';

const Contact = (props) => {
    return (

        <Row>
            <Col>
                <Card>
                    <CardImg top width="100%" src="../assets/images/team-2.jpg" alt="Card image cap" />

                </Card>
            </Col>


            <Col sm="6">
                <Card body>
                    <CardText style={{ fontSize: "15px" }}><p>
                        512 299 2329</p>
                        <p>HELLO@APPADAY.COM</p>
                        <p>110 INNER CAMPUS DRIVE</p>
                        <p>AUSTIN, TX 78712</p>

                        <i class="fab fa-twitter-square fa-3x"></i>
                        <i class="fab fa-linkedin fa-3x"></i>
                        <i class="fab fa-facebook-square fa-3x"></i>
                        <i class="fab fa-youtube-square fa-3x"></i>
                    </CardText>
                </Card>
            </Col>
        </Row>


    );
};

export default Contact;