import React from 'react';
import { Link } from 'react-router-dom';
import './FooterComp.css';

export default function FooterComponents() {
  return (
    <footer>
      <div className="footer-top container">
        <div className="footer-col site-info">
          <div className="footsite-icon">
            <i className="fa-solid fa-graduation-cap"></i>
            <span>CampusConnect</span>
          </div>
          <p>
            CampusConnect is your ultimate platform for campus events, news,
            and networking. Stay connected and never miss an update!
          </p>
        </div>

        <div className="footer-col col-2">
          <div className="footrownewsletter-row">
            <div className="footshow-info">
              <h4>Show</h4>
              <p>Discover the latest events and updates happening on your campus.</p>
            </div>
          </div>

          <div className="foot-row row">
            <div className="foot-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Galary">Gallery</Link></li>
              </ul>
            </div>
            <div className="foot-col">
              <h4>About</h4>
              <ul>
                <li><Link to="/About">About Us</Link></li>
                <li><Link to="/EventCatalog">Events</Link></li>
              </ul>
            </div>
            <div className="foot-col">
              <h4>Contact</h4>
              <ul>
                <li><Link to="/Contact">Contact Us</Link></li>
                <li><Link to="/Feedback">Feedbacks</Link></li>
                <li><Link to="/Sitemap">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 CampusConnect. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
