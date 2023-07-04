import React from 'react'
import { Row, Image, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { FaArrowCircleRight, FaReply, FaCross } from "react-icons/fa";
import { NavLink, BrowserRouter } from 'react-router-dom';

export const HeroPanel = () => {
  return (
    <BrowserRouter>
    <div className='header'>
      Dashboard for Notifications and Actions
    </div>
      <Row className='mt-5'>
        <Col xs={6} md={7}>
          <h2>Welcome Back, Chris.</h2>
          <p className='desc'>Let's take a look at your day today! You have <b>0 patients</b> scheduled and <b>0 new patients.</b>
            You are scheduled to produce <b>$0.00.</b> you need to produce <b>$0.00</b> stay on track this month.
            <NavLink to="/" className='huddle'>View Huddle</NavLink>
          </p>

          <Row>
            <Col sm={4}>
              <Card className='card-cust'>
                <Card.Body><p>Create a custom campaign.</p> </Card.Body>
                <FaReply />
              </Card>
            </Col>
            <Col sm={4}>
              <Card className='card-cust'>
                <Card.Body><p>Work on my tasks.</p> </Card.Body>
                <FaReply />
              </Card>
            </Col>
            <Col sm={4}>
              <Card className='card-cust'>
                <Card.Body><p>Find revenue opportunities.</p> </Card.Body>
                <FaReply />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={6} md={5}>
          <img src={require('../assets/hero-img.png')} style={{ height: "100%", width: "75%" }} />
        </Col>
      </Row>
    </BrowserRouter>
  )
}
