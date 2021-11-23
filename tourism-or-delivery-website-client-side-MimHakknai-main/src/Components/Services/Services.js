import React, { useEffect, useState } from 'react';
import { Card,Button, Col, CardGroup,Container,Row, Spinner } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Service = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://serene-forest-10567.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[services])
    return (services.length===0?
        <Spinner animation="border" />
        :
        <div>

            <Container className="py-4">
               <Row xs={1} md={3} lg={3} className="g-4">
                    {services.map(service=><Col>
                        <Card style={{height:'550px'}}>
                            <Card.Img variant="top" src={service.img} style={{height:'400px',width:'100%'}}/>
                            <Card.Body>
                            <Card.Title>{service.name}</Card.Title>
                            <Card.Text>
                                {service.desc}
                            </Card.Text>
                            <h5>Price : ${service.prices}</h5>
                            <Link to={`/booking/${service._id}`}><button className="btn btn-warning px-5">Book Now</button></Link>
                            </Card.Body>
                        </Card>
                        </Col>)}
                </Row>
                </Container>
        </div>
    );
};

export default Service;