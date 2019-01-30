import React from 'react';
import { Card, CardImg, Row, Col, CardText } from 'reactstrap';


const AboutUS = (props) => {
    return (

        <Row>

            <Col sm="6">
                <Card body>
                    <CardText style={{ fontSize: "15px" }}><p>
                        We are a team of coders who come from non-technical backgrounds. We understand the challenges of learning coding, and being a newbie in the tech industry, which is why we decided to help others on their coding journey. We came together to start App-A-Day! which is a new way for beginning coders to enter a calm and friendly atmosphere to start learning the fundamentals of coding. By taking small functional pieces of code and breaking them down line by line after being replicated we hope to give users an easily digestible set of tools to grow as programmer.</p>
                    </CardText>
                </Card>
            </Col>


            <Col>
                <Card>
                    <CardImg top width="100%" src="../assets/images/team.jpg" alt="Card image cap" />

                </Card>
            </Col>

        </Row>


    );
};

export default AboutUS;



// import React from 'react';
// import { Container, Row, Col } from 'reactstrap';


// const AboutUS = (props) => {
//     return (

//         <Container>
//             <Row>

//                 <Col>
//                     <p>
//                         We are a team of coders who come from non-technical backgrounds. We understand the challenges of learning coding, and being a newbie in the tech industry, which is why we decided to help others on their coding journey. We came together to start App-A-Day! which is a new way for beginning coders to enter a calm and friendly atmosphere to start learning the fundamentals of coding. By taking small functional pieces of code and breaking them down line by line after being replicated we hope to give users an easily digestible set of tools to grow as programmer.
//                     </p>
//                 </Col>


//                 <Col>
//                     <img className="team" alt="" src="../../assets/images/team.jpg" style={{ width: 400, height: 250 }} />
//                 </Col>



//             </Row>

//         </Container>
//     );
// };

// export default AboutUS;
