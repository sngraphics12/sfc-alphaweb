import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'
import './ContactCard.css'

export default function Contact() {
  const [Contact, setContact] = useState([])

  
  function fetchproduct() {
    console.log('Fetching faculty data...');
    fetch("/data/faculty.json")
      .then((res) => {
        console.log('Faculty response status:', res.status);
        return res.json();
      })
      .then((data) => {
        console.log('Faculty data loaded:', data);
        setContact(data)
      })
      .catch((err) => { 
        console.error('Error fetching faculty data:', err);
        // Try alternative path
        fetch("./public/data/faculty.json")
          .then((res) => res.json())
          .then((data) => {
            console.log('Faculty data loaded from alternative path:', data);
            setContact(data)
          })
          .catch((err2) => { 
            console.error('Error fetching faculty data from alternative path:', err2);
          })
      })
  }

  useEffect(() => {
    fetchproduct();
  }, [])  

  
  const handleBookmark = (person) => {
    
    const saved = JSON.parse(localStorage.getItem('bookmarkedContacts') || '[]')

    
    const exists = saved.find(item => item.email === person.email)
    if (!exists) {
      saved.push(person)
      localStorage.setItem('bookmarkedContacts', JSON.stringify(saved))
      alert(`${person.name} bookmarked!`)
    } else {
      alert(`${person.name} is already bookmarked.`)
    }
  }

  return (
    <>
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="section-title">Our Faculty & Staff</h2>
          <p className="section-subtitle">Meet the dedicated team behind CampusConnect</p>
        </div>
        
        <Row className="g-4">
          {Contact.map((person) => (
            <Col key={person.email} xs={12} sm={6} lg={4}>
              <Card className="h-100 shadow-sm border-0 faculty-card">
                <div className="faculty-image-container">
                  <Card.Img 
                    variant="top" 
                    src={person.image} 
                    alt={person.name}
                    className="faculty-image"
                  />
                  <div className="faculty-overlay">
                    <Button 
                      variant="outline-light" 
                      size="sm" 
                      className="bookmark-btn"
                      onClick={() => handleBookmark(person)}
                      title="Bookmark"
                    >
                      <i className="fa-solid fa-bookmark"></i>
                    </Button>
                  </div>
                  <Badge bg="primary" className="role-badge">
                    {person.role}
                  </Badge>
                </div>
                
                <Card.Body className="text-center">
                  <Card.Title className="faculty-name">
                    {person.name}
                  </Card.Title>
                  
                  <div className="faculty-info">
                    <div className="info-item">
                      <i className="fa-solid fa-envelope me-2 text-primary"></i>
                      <small className="text-muted">{person.email}</small>
                    </div>
                    
                    <div className="info-item">
                      <i className="fa-solid fa-phone me-2 text-success"></i>
                      <small className="text-muted">{person.phone}</small>
                    </div>
                    
                    <div className="info-item">
                      <i className="fa-solid fa-building me-2 text-info"></i>
                      <small className="text-muted">{person.department}</small>
                    </div>
                  </div>
                  
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="mt-3 contact-btn"
                  >
                    <i className="fa-solid fa-message me-2"></i>
                    Contact
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
