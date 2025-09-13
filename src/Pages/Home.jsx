import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button, Badge, Modal, Form, Toast } from 'react-bootstrap'
import NavbarComponents from '../Components/NavbarComponents'
import './Home.css'
import FooterComponents from '../Components/FooterComponents'

export default function Home() {
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    studentId: ''
  });

  useEffect(() => {
    // Fetch featured events data
    console.log('Fetching featured events...');
    fetch('/data/featuredEvents.json')
      .then(response => {
        console.log('Featured events response status:', response.status);
        return response.json();
      })
      .then(data => {
        console.log('Featured events data loaded:', data);
        setFeaturedEvents(data);
      })
      .catch(error => {
        console.error('Error loading featured events:', error);
      });
  }, []);

  const roles = [
    { id: 'student', title: 'Student', icon: 'fa-graduation-cap' },
    { id: 'staff', title: 'Staff', icon: 'fa-user-tie' },
    { id: 'guest', title: 'Guest', icon: 'fa-user' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store user data in localStorage
    localStorage.setItem('userData', JSON.stringify(formData));
    localStorage.setItem('userRole', formData.role);
    
    setShowToast(true);
    setShowModal(false);
    
    // Reload page to update navbar
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <>
      <div>
        <NavbarComponents />

        <main>
          <section className="hero-sec">
            <div className="hero-sec-bg">
              <div className="overlay">
                <div className="hero-content container">

                  <div className="heading">
                    <h1>
                      Welcome to <span>CampusConnect</span>
                    </h1>
                  </div>

                  <div className="countdown-container">
                    <div className="countdown">
                      <div className="hexagon">
                        <div className="hex-content">
                          <span id="days">00</span>
                          <small>Days</small>
                        </div>
                      </div>
                      <div className="hexagon">
                        <div className="hex-content">
                          <span id="hours">00</span>
                          <small>Hours</small>
                        </div>
                      </div>
                      <div className="hexagon">
                        <div className="hex-content">
                          <span id="minutes">00</span>
                          <small>Minutes</small>
                        </div>
                      </div>
                      <div className="hexagon">
                        <div className="hex-content">
                          <span id="seconds">00</span>
                          <small>Seconds</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="event-search-widget">
                    <div className="search-widget-container">
                      <div className="search-wrapper">
                        <form method="GET" action="search.html" target="_blank" className="event-search-form">
                          <div className="search-fields">
                            <div className="input-group">
                              <div className="input-icon">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                  </svg>
                                </span>
                              </div>
                              <input type="search" name="s" placeholder="Search Event" className="form-control" />
                            </div>

                            <div className="input-group">
                              <div className="input-icon">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                  </svg>
                                </span>
                              </div>
                              <select name="event_location" className="form-select">
                                <option value="">Search Location</option>
                                <option value="karachi">Karachi</option>
                                <option value="Texas">Lahore</option>
                                <option value="Islamabad">Islamabad</option>
                                <option value="Rawalpindi">Rawalpindi</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Sukhar">Sukhar</option>
                                <option value="Qutta">Qutta</option>
                                <option value="marie">Marie</option>
                              </select>
                            </div>

                            <div className="input-group">
                              <div className="input-icon">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                    <polyline points="2 17 12 22 22 17"></polyline>
                                    <polyline points="2 12 12 17 22 12"></polyline>
                                  </svg>
                                </span>
                              </div>
                              <select name="event_category" className="form-select">
                                <option value="">Category</option>
                                <option value="22">Education &amp; Training</option>
                                <option value="23">Fashion &amp; Beauty</option>
                                <option value="24">Food Fair &amp; Drinks</option>
                                <option value="25">Health &amp; Wellness</option>
                                <option value="26">Industrial Engineering</option>
                                <option value="28">Sports &amp; Travel</option>
                                <option value="29">Travel &amp; Tourism</option>
                              </select>
                            </div>

                            <div className="search-button-wrapper">
                              <button type="submit" className="search-button">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <circle cx="11" cy="11" r="8"></circle>
                                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="btn-col-2 button">
                    <button className="btn-primary" onClick={() => setShowModal(true)}>REGISTER NOW</button>
                    <button className="invite-btn">GET INVITE</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="web-section">
            <div className="web-sec-cont">
              <div className="web-sec-wrap">
                <div className="subsec-wrap plr-15">
                  <div className="text-center">
                    <h3 className="section-subtitle">Upcoming Event</h3>
                    <h2 className="section-title">Featured Events</h2>
                  </div>
                  <div className="f-events-wrapper">
                    <Container>
                      <Row className="g-4">
                        {featuredEvents.map((event, index) => (
                          <Col key={index} xs={12} sm={6} lg={4}>
                            <Card className="h-100 shadow-sm border-0 event-card">
                              <div className="event-image-container">
                                <Card.Img 
                                  variant="top" 
                                  src={event.image} 
                                  alt={event.title}
                                  className="event-image"
                                />
                                <div className="event-overlay">
                                  <Badge bg="primary" className="event-badge">
                                    <i className="fa-solid fa-calendar-alt me-1"></i>
                                    {event.date}
                                  </Badge>
                                </div>
                              </div>
                              <Card.Body className="d-flex flex-column">
                                <Card.Title className="event-title">
                                  {event.title}
                                </Card.Title>
                                <Card.Text className="event-description flex-grow-1">
                                  {event.description}
                                </Card.Text>
                                <div className="event-footer mt-auto">
                                  <div className="organizer-info mb-3">
                                    <small className="text-muted">Organized By</small>
                                    <div className="organizer-name">{event.organiner}</div>
                                  </div>
                                  {/* <Button 
                                    variant="primary" 
                                    size="sm" 
                                    className="w-100 event-btn"
                                  >
                                    <i className="fa-solid fa-eye me-2"></i>
                                    View Details
                                  </Button> */}
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </Container>
                  </div>
                  <div className="creative-shape">
                    <div className="shape-container">
                      <div className="shape-wrapper blue-blur"></div>
                    </div>
                  </div>
                  <div className="creative-shape">
                    <div className="shape-container">
                      <div className="shape-wrapper orange-blur"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <FooterComponents />
      </div>

      {/* Registration Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Header closeButton className="registration-header">
          <Modal.Title className="registration-title">
            <i className="fa-solid fa-user-plus me-2"></i>
            Join CampusConnect
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="registration-body">
          <div className="registration-intro mb-4">
            <p className="text-center text-muted">
              Complete your registration to access all campus features and events
            </p>
          </div>
          
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="form-label">
                    <i className="fa-solid fa-user me-2"></i>
                    Full Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="form-input"
                    required
                  />
                </Form.Group>
              </Col>
              
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="form-label">
                    <i className="fa-solid fa-envelope me-2"></i>
                    Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="form-input"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="form-label">
                    <i className="fa-solid fa-user-tag me-2"></i>
                    Select Role
                  </Form.Label>
                  <Form.Select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="">Choose your role</option>
                    {roles.map(role => (
                      <option key={role.id} value={role.id}>
                        {role.title}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              
              {formData.role === 'student' && (
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="form-label">
                      <i className="fa-solid fa-id-card me-2"></i>
                      Student ID
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleInputChange}
                      placeholder="Enter your student ID"
                      className="form-input"
                      required
                    />
                  </Form.Group>
                </Col>
              )}
            </Row>

            <div className="registration-footer mt-4">
              <div className="d-grid">
                <Button type="submit" variant="primary" size="lg" className="registration-submit-btn">
                  <i className="fa-solid fa-check me-2"></i>
                  Complete Registration
                </Button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Success Toast */}
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        className="toast-success"
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 9999
        }}
      >
        <Toast.Header>
          <i className="fa-solid fa-check-circle text-success me-2"></i>
          <strong className="me-auto">Registration Successful!</strong>
        </Toast.Header>
        <Toast.Body>
          Welcome to CampusConnect! Your role has been set.
        </Toast.Body>
      </Toast>
    </>
  );
}
