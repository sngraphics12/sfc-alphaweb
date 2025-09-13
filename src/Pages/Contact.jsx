import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Contact.css';
import ContactCard from './ContactCard';
import NavbarComponents from '../Components/NavbarComponents';
import FooterComponents from '../Components/FooterComponents';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 24.8636240509728,
  lng: 67.07448392723303
};

const regexPatterns = {
  name: /^[A-Za-z\s]{3,}$/,
  email: /^[a-z0-9]{3,}[@][a-z]{5}[.][a-z]{3}$/,
  subject: /^[A-Za-z\s]{3,30}$/,
  msg: /^[A-Za-z\s]{3,90}$/
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    msg: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    msg: ''
  });

  const [mapLoaded, setMapLoaded] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => setMapLoaded(true), 500); 
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));

    if (!regexPatterns[id].test(value)) {
      let errorMsg = '';
      switch (id) {
        case 'name':
          errorMsg = 'Minimum 3 alphabets, no special symbols';
          break;
        case 'email':
          errorMsg = 'Enter a proper email address';
          break;
        case 'subject':
          errorMsg = 'Min 3 characters, alphabets only';
          break;
        case 'msg':
          errorMsg = 'Min 3 characters, alphabets only';
          break;
        default:
          errorMsg = '';
      }

      setErrors((prev) => ({ ...prev, [id]: errorMsg }));
    } else {
      setErrors((prev) => ({ ...prev, [id]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let key in formData) {
      if (!formData[key]) {
        alert('Please fill out all fields first');
        return;
      }
    }

    for (let key in errors) {
      if (errors[key]) {
        alert('Please fill the form correctly!');
        return;
      }
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Form submitted successfully!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      msg: ''
    });
  };

  return (
    <div>
      <NavbarComponents />
      <div className="container">
        <div className="right-text">
          <div className="topic-text">Send us a message</div>
          <p>If you have any query you can message us. It`s our pleasure to help you.</p>
        </div>

        <div className="content">
          <div className="left-side">
            <div className="address details">
              <div className="topic">
                <i style={{ color: '#FF7A00' }} className="fa-solid fa-location-dot"></i> Address
              </div>
              <div className="text-one">Karachi</div>
            </div>

            <div className="phone details">
              <div className="topic">
                <i style={{ color: '#FF7A00' }} className="fa-solid fa-phone"></i> Phone
              </div>
              <div className="text-one">+92-312-1234567</div>
            </div>

            <div className="email details">
              <div className="topic">
                <i style={{ color: '#FF7A00' }} className="fa-solid fa-envelope"></i> Email
              </div>
              <div className="text-one">abc12@gmail.com</div>
            </div>
          </div>

          <div className="right-side">
            <form id="form" onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ border: errors.name ? '2px solid red' : formData.name ? '2px solid green' : '' }}
                />
                <span style={{ color: 'red', fontSize: '12px', marginLeft: '12px' }}>{errors.name}</span>
              </div>

              <div className="input-box">
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ border: errors.email ? '2px solid red' : formData.email ? '2px solid green' : '' }}
                />
                <span style={{ color: 'red', fontSize: '12px', marginLeft: '12px' }}>{errors.email}</span>
              </div>

              <div className="input-box">
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter your subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{ border: errors.subject ? '2px solid red' : formData.subject ? '2px solid green' : '' }}
                />
                <span style={{ color: 'red', fontSize: '12px', marginLeft: '12px' }}>{errors.subject}</span>
              </div>

              <div className="input-box message-box">
                <textarea
                  id="msg"
                  placeholder="Enter your message"
                  value={formData.msg}
                  onChange={handleChange}
                  style={{ border: errors.msg ? '2px solid red' : formData.msg ? '2px solid green' : '' }}
                />
                <span style={{ color: 'red', fontSize: '12px', marginLeft: '12px' }}>{errors.msg}</span>
              </div>

              <div className="button">
                <input type="submit" value="Send Now" />
              </div>
            </form>
          </div>
        </div>

       
        <div className="col">
          {mapLoaded && (
            <LoadScript googleMapsApiKey="AIzaSyDaa_PfsR0hGTHl3oVngIdE9Py1_ekIOs0" libraries={['marker']}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} title="Aptech Learning SFC" />
              </GoogleMap>
            </LoadScript>
          )}
        </div>
      </div>
      <ContactCard/>
      <FooterComponents/>
    </div>
  );
};

export default ContactForm;
