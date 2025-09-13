import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap'
import './RegistrationForm.css'

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    contact: '',
    email: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    
    if (!formData.fatherName.trim()) {
      newErrors.fatherName = "Father's name is required"
    }
    
    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact number is required'
    } else if (!/^[0-9]{10}$/.test(formData.contact)) {
      newErrors.contact = 'Contact number must be 10 digits'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setShowSuccess(true)
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        fatherName: '',
        contact: '',
        email: ''
      })
      setShowSuccess(false)
    }, 3000)
  }

  return (
    <div className="registration-page">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="registration-card">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <div className="registration-icon">
                    <i className="fa-solid fa-user-plus"></i>
                  </div>
                  <h2 className="registration-title">Student Registration</h2>
                  <p className="registration-subtitle">
                    Join our campus community and get access to exclusive events
                  </p>
                </div>

                {showSuccess && (
                  <Alert variant="success" className="success-alert">
                    <i className="fa-solid fa-check-circle me-2"></i>
                    Registration Successful! Welcome to our campus community.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit} noValidate>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          isInvalid={!!errors.firstName}
                          placeholder="Enter your first name"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.firstName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          isInvalid={!!errors.lastName}
                          placeholder="Enter your last name"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.lastName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Father's Name *</Form.Label>
                    <Form.Control
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      isInvalid={!!errors.fatherName}
                      placeholder="Enter your father's name"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.fatherName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Contact Number *</Form.Label>
                    <Form.Control
                      type="tel"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      isInvalid={!!errors.contact}
                      placeholder="10-digit mobile number"
                      maxLength="10"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.contact}
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                      <i className="fa-solid fa-info-circle me-1"></i>
                      Enter 10-digit mobile number without country code
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Email Address *</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                      placeholder="Enter your email address"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                      <i className="fa-solid fa-envelope me-1"></i>
                      We'll use this to send you important updates
                    </Form.Text>
                  </Form.Group>

                  <Button
                    type="submit"
                    className="submit-btn w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Processing...
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-paper-plane me-2"></i>
                        Submit Registration
                      </>
                    )}
                  </Button>
                </Form>

                <div className="registration-footer">
                  <p className="text-muted small text-center">
                    <i className="fa-solid fa-shield-alt me-2"></i>
                    Your information is secure and will not be shared with third parties
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

