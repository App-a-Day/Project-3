import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Team.css';

const Team = (props) => {
    return (

        <Container>
            <Row>
                <Col>
                    <h2 id="theTeam"> The Team </h2>
                </Col>


                <Col>
                    <img className="ui avatar image" alt="" src="../../assets/images/ian.jpg" style={{ width: 100, height: 100 }} />
                    <p>Ian Dowdy</p>
                </Col>

                <Col>
                    <img className="ui avatar image" alt="" src="../../assets/images/jennifer.jpg" style={{ width: 100, height: 100 }} />
                    <p>Jennifer Tuten</p>
                </Col>

                <Col>
                    <img className="ui avatar image" alt="" src="../../assets/images/nicole.jpg" style={{ width: 100, height: 100 }} />
                    <p>Nicole Pike</p>
                </Col>

                <Col>
                    <img className="ui avatar image" alt="" src="../../assets/images/pat.jpg" style={{ width: 100, height: 100 }} />
                    <p>Patricia Seade</p>
                </Col>

                <Col>
                    <img className="ui avatar image" alt="" src="../../assets/images/alex.jpg" style={{ width: 100, height: 100 }} />
                    <p>Alex Toothman</p>
                </Col>

            </Row>






        </Container>
    );
};

export default Team;