import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row ,Button, Accordion} from 'react-bootstrap';
import '../Blog/Blog.css'

const Blog = () => {
    const[blogs,setBlogs]=useState([]);
    
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                       <div className="blog">
                          <img src="https://graphlertech.com/wp-content/uploads/2019/06/Blog-image.jpg" alt="blog images" className="img-fluid" style={{height:'500px',width:'100%'}}/>
                       </div>
                      
                    </Col>

                    {/* blog main section is here */}

                  
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col lg={9} md={9} sm={6} xs={12}>
                        {
                            blogs.map(blog=>
                                
                                <Card key={blog.id} className="mb-3">
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body>
                                        <p className="text-muted">{blog.subtitle}</p>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text className="text-secondary">
                                           {blog.desc}
                                        </Card.Text>
                                        <Button variant="primary">Read more</Button>
                                    </Card.Body>
                                    </Card>)
                        }
                    </Col>
                    <Col lg={3} md={3} sm={6} xs={12}>
                      <h5 className="text-info my-2">Recent Post:</h5>
                        {
                            blogs.map(blog=>
                                <div>
                            <h6>{blog.title}</h6><br/></div>)
                        }

                        <h5 className="text-info my-2">Extra Facilities : </h5>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Ture in sky</Accordion.Header>
                                <Accordion.Body>
                                A health facility is, in general, any location where healthcare is provided. Health facilities range from small clinics and doctor's offices to urgent care centers and large hospitals with elaborate emergency rooms and trauma centers
                                </Accordion.Body>
                            </Accordion.Item>
                            
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Enjoy Nature and food</Accordion.Header>
                                <Accordion.Body>
                                Nursing homes are facilities that provide 24-hour care for elderly or disabled people. They can either provide generalized care for any of these categories or specialize in a single area, like patients with severe mental illnesses or those in need of constant care due to a severe physical issue. As a general rule, the types of illnesses and injuries treated in nursing homes are not serious and urgent enough for hospitalization but are too severe to be treated at home.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Fresh mind and Awosome Sinery</Accordion.Header>
                                <Accordion.Body>
                                Mental health treatment facilities can either be general institutions that offer psychiatric and psychological care to their patients or specialize in one specific area of mental health. These facilities can offer both inpatient and outpatient care, depending on the severity and stage of their patients' mental health rehabilitation process
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Peach and Slint</Accordion.Header>
                                <Accordion.Body>
                                Hospice care facilities aim to improve the quality of life for people with advanced and life-limiting illnesses, as well as their families and other caregivers. Unlike most healthcare institutions, which only provide medical care services to their patients, hospice care facilities employ a diverse group of healthcare providers that also take care of the patients' emotional, spiritual and social needs.
                                </Accordion.Body>
                            </Accordion.Item>

                            </Accordion>

                            <h4 className="text-info my-3">Tures Countries</h4>
                            <h6>Dubai</h6>
                            <h6>Bangladesh</h6>
                            <h6>United States</h6>
                            <h6>Euopian Countries</h6>
                            <h6>Austalia</h6>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default Blog;