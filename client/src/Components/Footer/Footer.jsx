import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaFacebookF , FaTwitter ,FaLinkedin ,FaInstagram} from "react-icons/fa";

import "./footer.css";

const footerQuickLinks = [
  {
    display: "About",
    url: "#",
  },
 


];

const footerInfoLinks = [
  {
    display: "Privacy",
    url: "#",
  },
  {
    display: "Terms",
    url: "#",
  },

 

 
];

const Footer = () => {
  return (
    <div className="footer">
      <Container className="py-5 ">
        <Row>
       

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Company</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Legal</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
   
            <h6 className="fw-bold">SUBSCRIBE TO OUR NEWSLETTER</h6>

            <p>The latest news, articles, and resources, sent to your inbox weekly.</p>

            <form />
  <div className="form-group">
  
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
   
  </div>
            <button type="button" class="btn btn-primary"> Subscribe</button>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          
        <Col lg="8" md="8">
            <h6 style={{color:"grey"}}>    2023 E-Learning. All rights reserved.</h6>
     
            </Col>

            <Col >

            <span>
                {" "}
                <a href="https://www.facebook.com"  rel="noopener"
              target="_blank">
                <FaFacebookF style={{color:"grey", height: "25px",
  width: "25px"}}/>
                </a>
              </span>
            
            </Col>
            <Col >
            <span>
                {" "}
                <a href="https://instagram.com"  rel="noopener"
              target="_blank">
                <FaInstagram style={{color:"grey", height: "25px",
  width: "25px"}} />
                </a>
              </span>
            </Col>
            <Col >
            <span>
                {" "}
                <a href="https://instagram.com"  rel="noopener"
              target="_blank">
                  <FaTwitter style={{color:"grey", height: "25px",
  width: "25px"}}/>
                </a>
              </span>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
