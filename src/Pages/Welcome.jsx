import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Welcome.css'

export default function Welcome() {
  const [selectedRole, setSelectedRole] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const navigate = useNavigate()

  const roles = [
    {
      id: 'student',
      title: 'Student',
      icon: 'fa-graduation-cap',
      description: 'Join events & access resources',
      color: '#4f46e5',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: ['Events', 'Resources', 'News', 'Networking'],
      stats: '500+ Students'
    },
    {
      id: 'staff',
      title: 'Staff',
      icon: 'fa-user-tie',
      description: 'Manage activities & support',
      color: '#059669',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      features: ['Management', 'Support', 'Updates', 'Admin'],
      stats: '50+ Staff'
    },
    {
      id: 'guest',
      title: 'Guest',
      icon: 'fa-user-friends',
      description: 'Explore events & discover',
      color: '#dc2626',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      features: ['Events', 'Tours', 'Info', 'Contact'],
      stats: '1000+ Visitors'
    }
  ]

  const handleRoleSelect = async (role) => {
    setSelectedRole(role.id)
    setCurrentStep(2)
    
    // Show loading after a brief delay
    setTimeout(() => {
      setIsLoading(true)
    }, 500)
    
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    localStorage.setItem('userRole', role.id)
    localStorage.setItem('userData', JSON.stringify({
      name: role.title,
      email: '',
      role: role.id,
      studentId: ''
    }))
    
    navigate('/home')
  }

  const handleBack = () => {
    setSelectedRole('')
    setCurrentStep(1)
    setIsLoading(false)
  }

  useEffect(() => {
    // Add entrance animation
    const elements = document.querySelectorAll('.welcome-title, .welcome-subtitle, .welcome-card')
    elements.forEach((el, index) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      setTimeout(() => {
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, index * 200)
    })
  }, [])

  return (
    <>
      <div className="welcome-page">
        <div className="welcome-background">
          <div className="animated-bg">
            <div className="bg-shape shape-1"></div>
            <div className="bg-shape shape-2"></div>
            <div className="bg-shape shape-3"></div>
            <div className="bg-shape shape-4"></div>
            <div className="bg-shape shape-5"></div>
          </div>
        </div>
  
        <Container fluid className="py-5">
          <div className="text-center mb-5">
            <div className="welcome-logo">
              <div className="logo-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
            </div>
            <h1 className="welcome-title">
              Welcome to CampusConnect
            </h1>
            <p className="welcome-subtitle">
              Your digital gateway to campus life, events, and endless opportunities
            </p>
            <div className="welcome-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Students</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Events</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Visitors</span>
              </div>
            </div>
          </div>
  
          {/* ✅ Full-width card directly in container */}
          <Card className="welcome-card w-100">
            <Card.Body className="p-0 w-100">
              {currentStep === 1 && (
                <div className="step-content">
                  <div className="welcome-header">
                    <h3>Choose Your Journey</h3>
                    <p>Select your role to unlock personalized campus experiences</p>
                  </div>
  
                  <div className="role-selection">
                    {roles.map((role, index) => (
                      <div
                        key={role.id}
                        className="role-option"
                        onClick={() => handleRoleSelect(role)}
                        style={{ '--role-color': role.color, '--delay': `${index * 0.1}s` }}
                      >
                        <div className="role-icon" style={{ background: role.gradient }}>
                          <i className={`fa-solid ${role.icon}`}></i>
                        </div>
                        <div className="role-content">
                          <h5 className="role-title">{role.title}</h5>
                          <p className="role-description">{role.description}</p>
                          <div className="role-stats">{role.stats}</div>
                          <div className="role-features">
                            {role.features.map((feature, idx) => (
                              <span key={idx} className="feature-tag">
                                <i className="fa-solid fa-check"></i>
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="role-arrow">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
  
              {currentStep === 2 && (
                <div className="step-content loading-step">
                  <div className="loading-content">
                    <div className="loading-icon">
                      <div className="spinner"></div>
                    </div>
                    <h3>Setting up your experience...</h3>
                    <p>Preparing personalized content for you</p>
                    <div className="loading-progress">
                      <div className="progress-bar"></div>
                    </div>
                    <button className="back-btn" onClick={handleBack}>
                      <i className="fa-solid fa-arrow-left"></i>
                      Back to Selection
                    </button>
                  </div>
                </div>
              )}
  
              <div className="welcome-footer">
                <div className="security-badge">
                  <i className="fa-solid fa-shield-check"></i>
                  <span>Secure & Private</span>
                </div>
                <div className="help-link">
                  <i className="fa-solid fa-question-circle"></i>
                  <span>Need Help?</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  )
  
}
