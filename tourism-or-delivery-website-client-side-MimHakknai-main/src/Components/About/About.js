import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row,Button } from 'react-bootstrap';

const About = () => {
    const[About,setAbout] = useState([]);

    useEffect(()=>{
        fetch('about.json')
        .then(res=>res.json())
        .then(data=>setAbout(data))
    },[])


    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12} md={12} xs={12} sm={12}>
                        <h1 className="text-center text-muted py-4">Meet Our About</h1>
                    </Col>
                </Row>

                <Row>
                    
                       {
                           About.map(doctor=>
                            <Col md={4} lg={4} sm={6} xs={12}>
                               <Card style={{height:'450px' , margin:'10px 5px ' ,padding:'7px'}}>
                                    <Card.Img variant="top" src={doctor.img}  style={{height:'400px'}}/>
                                    <Card.Body>
                                        <Card.Title>{doctor.title}</Card.Title>
                                        
                                    </Card.Body>
                                    </Card>
                            </Col>
                            
                            )
                       }
                    
                </Row>
            </Container>
        </div>
    );
};

export default About;