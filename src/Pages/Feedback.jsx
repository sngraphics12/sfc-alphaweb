import React, { useState } from "react";
import NavbarComponents from "../Components/NavbarComponents";
import "./Feedback.css";
import FooterComponents from '../Components/FooterComponents';

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [username, setUsername] = useState('');
  const [email, setemail] = useState('');
  const [comment, setcomment] = useState('');
  const [role, setRole] = useState('');
  const [event, setEvent] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [feedbacks, setfeedbacks] = useState(JSON.parse(localStorage.getItem('feedbacks')) || []);

  const showRating = (number) => {
    setRating(number);
  };

  function handleSubmit(e) {
    e.preventDefault();
    let newfeedback = {
      username,
      email,
      comment,
      rating,
      role,
      event,
      eventDate,
    };

    setfeedbacks(prev => [newfeedback, ...prev]);

    localStorage.setItem('feedbacks', JSON.stringify([newfeedback, ...feedbacks]));

    e.target.reset();
    setRating(0);
    setRole('');
    setEvent('');
    setEventDate('');
  }

  return (
    < >
    
      <NavbarComponents />

      <form onSubmit={handleSubmit}>
        <h2 style={{color:' #0052D4', textAlign:'center', fontFamily:'Poppins',fontWeight:'900' }}>Feedback Form</h2>
        <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Enter your Name"required/> <input type="email" onChange={(e) => setemail(e.target.value)}placeholder="Enter your Email"/>
  <select onChange={(e) => setRole(e.target.value)}required> <option value="">Select your role</option> <option value="Student">Student</option> <option value="Faculty">Faculty</option> <option value="Outsider">Outsider</option> <option value="Other">Other</option></select>
  
  <select onChange={(e) => setEvent(e.target.value)} required> <option value="">Select the event you are giving feedback on</option> <option value="Orientation Program">Orientation Program</option> <option value="Cultural Fest">Cultural Fest</option> <option value="Tech Workshop">Tech Workshop</option> <option value="Sports Week">Sports Week</option> <option value="Guest Lecture">Guest Lecture</option> </select>
        <input type="date" onChange={(e) => setEventDate(e.target.value)} required/>
        <textarea onChange={(e) => setcomment(e.target.value)} placeholder="Your feedback" required rows={8}></textarea> <button type="submit">Submit</button>
        <h2 style={{color:' #0052D4', textAlign:'center', fontFamily:'Poppins',fontWeight:'600'}}>Rate Here!</h2>
 <div className="stars">{[1, 2, 3, 4, 5].map((num) => (<span key={num} onClick={() => showRating(num)} className={num <= rating ? "selected" : ""}>&#9733; </span> ))}<div />
          <div id="rating-value"> {rating > 0 ? `You rated: ${rating} ⭐` : "No rating yet"}</div></div>
      </form>
      <div className="feedbacks">
        <h2 style={{color:' #0052D4',  fontFamily:'Poppins',fontWeight:'600'}}>Users Feedbacks</h2>
        {feedbacks.map((f, x) => {
          return (
            <div key={x}  >
              <h4> Name:  {f.username}</h4>
              <h6> <b> Email: </b>{f.email}</h6>
              <h6> <b> Role:</b> {f.role}</h6>
              <h6><b> Event: </b> {f.event}</h6>
              <h6><b> Date Attended:  </b> {f.eventDate}</h6>
              <h6  ><b>Comments :</b> {f.comment}</h6>
              <h6>{f.rating} ⭐<b> rating </b></h6>
            </div>
          );
        })}
      </div>
    <FooterComponents/>
    </>
  );
}
