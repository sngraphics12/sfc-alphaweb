import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap'
import './NavbarComp.css'

export default function NavbarComponents() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [userRole, setUserRole] = useState('')
  const [userData, setUserData] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const role = localStorage.getItem('userRole')
    const data = localStorage.getItem('userData')
    if (role) setUserRole(role)
    if (data) setUserData(JSON.parse(data))
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const isActive = path => location.pathname === path

  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top" className="shadow-lg">
      <Container>
        <Navbar.Brand as={Link} to="/home" className="d-flex align-items-center">
          <div className="logo-icon me-2">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <div className="logo-text">
            <div className="logo-title">CampusConnect</div>
            <small className="logo-subtitle">University Portal</small>
          </div>
          {userRole && (
            <Badge bg="light" text="dark" className="ms-2 role-badge">
              <i
                className={`fa-solid ${
                  userRole === 'student'
                    ? 'fa-graduation-cap'
                    : userRole === 'staff'
                    ? 'fa-user-tie'
                    : 'fa-user'
                } me-1`}
              ></i>
              {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
            </Badge>
          )}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
        <Navbar.Collapse id="basic-navbar-nav" in={isMenuOpen.toString()}>
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/home"
              className={`nav-link-custom ${isActive('/home') ? 'active' : ''}`}
            >
              <i className="fa-solid fa-home me-1"></i> Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/galary"
              className={`nav-link-custom ${isActive('/galary') ? 'active' : ''}`}
            >
              <i className="fa-solid fa-images me-1"></i> Gallery
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/About"
              className={`nav-link-custom ${isActive('/About') ? 'active' : ''}`}
            >
              <i className="fa-solid fa-info-circle me-1"></i> About
            </Nav.Link>
            <NavDropdown
              title={
                <span>
                  <i className="fa-solid fa-calendar-alt me-1"></i> Events
                </span>
              }
              id="events-dropdown"
            >
              <NavDropdown.Item as={Link} to="/EventCatalog">
                <i className="fa-solid fa-list me-2"></i> All Events
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/EventCatalog?category=Academic">
                <i className="fa-solid fa-graduation-cap me-2"></i> Academic Events
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/EventCatalog?category=Cultural">
                <i className="fa-solid fa-music me-2"></i> Cultural Events
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/EventCatalog?category=Sports">
                <i className="fa-solid fa-football me-2"></i> Sports Events
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/Contact"
              className={`nav-link-custom ${isActive('/Contact') ? 'active' : ''}`}
            >
              <i className="fa-solid fa-phone me-1"></i> Contact
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Feedback"
              className={`nav-link-custom ${isActive('/Feedback') ? 'active' : ''}`}
            >
              <i className="fa-solid fa-comment-dots me-1"></i> Feedback
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
