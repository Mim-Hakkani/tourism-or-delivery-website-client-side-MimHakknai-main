import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footer_img from '../../images/logo2.png'

const Footer = () => {
    return (
       <footer className="bg-light py-4">
           <div className="top-footer ">
               <Container>
                   <Row>
                       <Col lg={4} md={4} sm={12} xs={12}>
                          <div className="footer-1 m-sm-auto m-md-auto text-lg-start text-md-start">
                              <img src ={footer_img} alt="" style={{height:'70px'}}></img>
                              <p className="text-secondary text-align-justify mt-3">tourism services means a business selling, arranging or chartering tours, transportation or accommodation for travellers, or conducting tours including, but not limited to: boat charter or tourist services, tour guide or travel agency.</p>
                          </div>
                        </Col>

                        <Col lg={4} md={4} sm={12} xs={12}>
                            <div className="footer-2 m-sm-auto m-md-auto text-lg-start text-md-start">
                                <h2>Our Services</h2>
                                <p>Less Cost</p>
                                <p>Free Snaks and Cockes</p>
                                <p>Travel anywheres</p>
                                <p>Extra Guideline</p>
                                <p>Always Monitoring </p>
                            </div>
                        </Col>

                        <Col lg={4} md={4} sm={12} xs={12}>
                            <div className="footer-3 m-sm-auto m-md-auto text-lg-start text-md-start">
                                <h2>Our Turisum Guides</h2>
                                <p>Golam Hakkani(Ceo)</p>
                                <p>Dr.Rakib Hasan(Manager)</p>
                                <p>Dr.Rashdual Alom(Guideliner)</p>
                                <p>Dr.Tanjuma Farhan(accountent)</p>
                                <p>Dr.Tasnia Alom(giudeliner)</p>
                            </div>
                        </Col>
                       
                        {/* <Col lg={4} md={4} sm={12} xs={12}>
                            <div className="footer-4 m-sm-auto m-md-auto text-lg-start text-md-start">
                                <h2>Opens Time</h2>
                                <p>Sat:10.00 am - 4.00pm</p>
                                <p>Fri: 10.00 am - 2.00 pm</p>
                                <h2>Closed Hours</h2>
                                <p>Sun : 4.00 pm - 8.00 pm</p>
                                
                            </div>
                        </Col> */}
                       
              
                   </Row>
               </Container>
           </div>
           <hr/>
        <Container>
            <Row>
                <Col>
                    <div className="main-footer text-center py-2 text-secondary">
                       <p>All Right Reserved @ copy by Golam Hakkani Mim</p>
                    </div>
                </Col>
            </Row>
        </Container>



       </footer>
    );
};

export default Footer;