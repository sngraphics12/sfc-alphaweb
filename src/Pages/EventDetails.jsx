import React from 'react';
import { useLocation } from 'react-router-dom';
import NavbarComponents from '../Components/NavbarComponents';
import FooterComponents from '../Components/FooterComponents';
import './EventDetail.css';

export default function EventDetais() {
  const location = useLocation();
  let Event = location.state;

  return (
    <div>
      <NavbarComponents />
      <div className="ed-container">
        <img src={Event.image} alt={Event.name} className="ed-image" />
        <h1 className="ed-title">{Event.name}</h1>
        <h6 className="ed-category">Category: {Event.category}</h6>
        <p className="ed-description">{Event.description}</p>
        <div className="ed-info">
          <div className="ed-info-item">Time: {Event.time}</div>
          <div className="ed-info-item">Date: {Event.date}</div>
          <div className="ed-info-item">Venue: {Event.venue}</div>
          <div className="ed-info-item">Location: {Event.location}</div>
          <div className="ed-info-item">Status: {Event.status}</div>
        </div>
      </div>
      <FooterComponents />
    </div>
  );
}
