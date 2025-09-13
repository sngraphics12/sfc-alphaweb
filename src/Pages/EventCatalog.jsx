import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import NavbarComponents from '../Components/NavbarComponents';
import FooterComponents from '../Components/FooterComponents';
import './EventCatalog.css';

export default function EventsCatalog() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name'); // Sorting by name, category, date

  function fetchEvents() {
    fetch('./public/data/EventCata.json')
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setFilteredEvents(data);  
      })
      .catch((err) => {
        console.error('Failed to fetch events:', err);
      });
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  const filterEvents = () => {
    let filtered = [...events];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(event =>
        event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category') {
      filtered.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortBy === 'date') {
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setFilteredEvents(filtered);
  };

  useEffect(() => {
    filterEvents();
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="events-catalog-container">
      <NavbarComponents /><br /><br /><br /><br />
      <h1 className="events-heading">Events Catalog</h1>
  
      {/* Search, Filter, Sort */}
      <div className="search-filter-row">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="col-3">
            <select
              className="form-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Technical">Technical</option>
              <option value="Cultural">Cultural</option>
              <option value="Sports">Sports</option>
              <option value="Department">Department</option>
            </select>
          </div>

          <div className="col-3">
            <select
              className="form-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Sort by Name</option>
              <option value="category">Sort by Category</option>
              <option value="date">Sort by Date</option>
            </select>
          </div>
        </div>
      </div>

      

      {/* Event Cards */}
      <div className="container">
        <div className="event-card-container">
          {filteredEvents.map((E) => (
            <div key={E.id} className="event-card-wrapper">
              <Card className="event-card">
                <Card.Img variant="top" src={E.image} className="event-image" />
                <Card.Body className="event-body">
                  <h3 className="event-name">{E.name}</h3>
                  <Card.Title className="event-category">Category: {E.category}</Card.Title>
                  <Card.Text className="event-description">Description: {E.description}</Card.Text>
                  <h6 className="event-time">Time: {E.time}</h6>
                  <h6 className="event-venue">Venue: {E.venue}</h6>
                  <h6 className="event-date">Date: {E.date}</h6>
                  <Button
                    className="detail-button detail-button-orange"
                    onClick={() => navigate('/Event', { state: E })}
                  >
                    Detail
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <FooterComponents />
    </div>
  );
}