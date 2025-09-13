import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import NavbarComponents from '../Components/NavbarComponents';
import FooterComponents from '../Components/FooterComponents';
import './About.css';

export default function About() {
  return (
    <div>
      <NavbarComponents />

      <section className="about-header">
        <h1>About Us</h1>
        <p>Discover what makes our college community special</p>
      </section>

      <Container>
        <p>
          The About Page provides viewers with essential background information about the college, its traditions, the types of events it hosts, and the teams or bodies that organize these events. This page builds context and trust, especially for new students, guests, or potential sponsors.
        </p>
      </Container>

      <Container>
        <h2>Our College</h2>
        <div className="divider"></div>
        <p>
          <strong>ACE</strong>, affiliated with Columbia.<br />
          Located in Karachi, recognized for its modern campus, research labs, and student achievements.
        </p>
      </Container>

      <Container>
        <h2>Key Annual Events</h2>
        <div className="divider"></div>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <i className="fas fa-laptop-code me-2"></i>
              Technical Events
            </Accordion.Header>
            <Accordion.Body>
              TechFest, Hackathon, Robotics Championship, and other technical competitions held annually.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <i className="fas fa-music me-2"></i>
              Cultural Events
            </Accordion.Header>
            <Accordion.Body>
              Annual Day, Music Nights, Dance Competitions, and various art and cultural festivals.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <i className="fas fa-running me-2"></i>
              Sports & Other Events
            </Accordion.Header>
            <Accordion.Body>
              Inter-college Sports Meet, Blood Donation Drives, Alumni Meets, and community engagement activities.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      <Container>
        <h2>Our Values</h2>
        <div className="divider"></div>
        <ul>
          <li><i className="fas fa-users me-2" style={{color: 'var(--teal)'}}></i> Collaborative learning environment</li>
          <li><i className="fas fa-lightbulb me-2" style={{color: 'var(--teal)'}}></i> Encouraging innovation and creativity</li>
          <li><i className="fas fa-medal me-2" style={{color: 'var(--teal)'}}></i> Commitment to cultural and technical excellence</li>
          <li><i className="fas fa-handshake me-2" style={{color: 'var(--teal)'}}></i> Building strong alumni and community connections</li>
        </ul>
      </Container>

      <Container>
        <h2 className="text-center mb-4">Organizing Bodies</h2>
        <div className="divider mx-auto mb-4"></div>
        <Row className="g-4">
          <Col md={6} lg={3}>
            <div className="org-card">
              <div className="org-card-body text-center">
                <div className="org-icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h3>Technical Society</h3>
                <p>Handles coding, robotics, and tech fests. Organizes workshops and hackathons throughout the year.</p>
              </div>
            </div>
          </Col>
          
          <Col md={6} lg={3}>
            <div className="org-card">
              <div className="org-card-body text-center">
                <div className="org-icon">
                  <i className="fas fa-theater-masks"></i>
                </div>
                <h3>Cultural Club</h3>
                <p>Organizes cultural nights, dances, and arts events. Promotes artistic expression among students.</p>
              </div>
            </div>
          </Col>
          
          <Col md={6} lg={3}>
            <div className="org-card">
              <div className="org-card-body text-center">
                <div className="org-icon">
                  <i className="fas fa-running"></i>
                </div>
                <h3>Sports Council</h3>
                <p>Leads athletic events and inter-college tournaments. Manages sports facilities and teams.</p>
              </div>
            </div>
          </Col>
          
          <Col md={6} lg={3}>
            <div className="org-card">
              <div className="org-card-body text-center">
                <div className="org-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3>Alumni Committee</h3>
                <p>Connects past students with current initiatives. Organizes networking events and mentorship programs.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <FooterComponents />
    </div>
  );
}