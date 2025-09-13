import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './sitemap.css';
import NavbarComponents from '../Components/NavbarComponents';
import FooterComponents from '../Components/FooterComponents';

export default function SiteMap() {
  return (
    <>
      <NavbarComponents />
      
      <Container className="sitemap-container">
        <div className="text-center mb-5">
          <h1 className="sitemap-title">
            <i className="fa-solid fa-sitemap me-3"></i>
            Site Map
          </h1>
          <p className="sitemap-description">
            Navigate through all sections of CampusConnect
          </p>
        </div>

        <Row className="g-4">
          {/* About Section */}
          <Col xs={12} md={6} lg={3}>
            <Card className="sitemap-card h-100">
              <Card.Body className="text-center">
                <div className="sitemap-icon">
                  <i className="fa-solid fa-info-circle"></i>
                </div>
                <Card.Title className="sitemap-section-title">About</Card.Title>
                <div className="sitemap-links">
                  <Link to="/About" className="sitemap-link">Institute Overview</Link>
                  <Link to="/About" className="sitemap-link">Departments</Link>
                  <Link to="/About" className="sitemap-link">Annual Events</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Event Catalog Section */}
          <Col xs={12} md={6} lg={3}>
            <Card className="sitemap-card h-100">
              <Card.Body className="text-center">
                <div className="sitemap-icon">
                  <i className="fa-solid fa-calendar-alt"></i>
                </div>
                <Card.Title className="sitemap-section-title">Events</Card.Title>
                <div className="sitemap-links">
                  <Link to="/EventCatalog" className="sitemap-link">All Events</Link>
                  <Link to="/EventCatalog?category=Academic" className="sitemap-link">Technical</Link>
                  <Link to="/EventCatalog?category=Cultural" className="sitemap-link">Cultural</Link>
                  <Link to="/EventCatalog?category=Sports" className="sitemap-link">Sports</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Gallery Section */}
          <Col xs={12} md={6} lg={3}>
            <Card className="sitemap-card h-100">
              <Card.Body className="text-center">
                <div className="sitemap-icon">
                  <i className="fa-solid fa-images"></i>
                </div>
                <Card.Title className="sitemap-section-title">Gallery</Card.Title>
                <div className="sitemap-links">
                  <Link to="/galary" className="sitemap-link">All Images</Link>
                  <Link to="/galary" className="sitemap-link">By Year</Link>
                  <Link to="/galary" className="sitemap-link">By Category</Link>
                  <Link to="/galary" className="sitemap-link">Recent Events</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact & Feedback Section */}
          <Col xs={12} md={6} lg={3}>
            <Card className="sitemap-card h-100">
              <Card.Body className="text-center">
                <div className="sitemap-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <Card.Title className="sitemap-section-title">Contact</Card.Title>
                <div className="sitemap-links">
                  <Link to="/Contact" className="sitemap-link">Faculty & Staff</Link>
                  <Link to="/Feedback" className="sitemap-link">Feedback</Link>
                  <Link to="/Contact" className="sitemap-link">Get in Touch</Link>
                  <Link to="/sitemap" className="sitemap-link">Site Map</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <FooterComponents />
    </>
  );
}
