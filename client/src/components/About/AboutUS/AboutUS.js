import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const AboutUS = (props) => {
    return (

        <Container>
            <Row>

                <Col>
                    <p>
                        We are a team of coders who come from non-technical backgrounds. We understand the challenges of learning coding, and being a newbie in the tech industry, which is why we decided to help others on their coding journey. We came together to start App-A-Day! which is a new way for beginning coders to enter a calm and friendly atmosphere to start learning the fundamentals of coding. By taking small functional pieces of code and breaking them down line by line after being replicated we hope to give users an easily digestible set of tools to grow as programmers.
                    </p>
                </Col>


                <Col>
                    <img className="team" alt="" src="../../assets/images/team.jpg" style={{ width: 400, height: 250 }} />
                </Col>



            </Row>

        </Container>
    );
};

export default AboutUS;