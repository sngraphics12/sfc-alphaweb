const params = new URLSearchParams(window.location.search);

const keyword = params.get('s') ? decodeURIComponent(params.get('s')).toLowerCase() : '';
const eventLocation = params.get('event_location') ? decodeURIComponent(params.get('event_location')).toLowerCase() : '';
const category = params.get('event_category') || '';


  // Map category ID to name
  const categoryMap = {
    "22": "Education & Training",
    "23": "Fashion & Beauty",
    "24": "Food Fair & Drinks",
    "25": "Health & Wellness",
    "26": "Industrial Engineering",
    "28": "Sports & Travel",
    "29": "Travel & Tourism"
  };

  fetch('/data/EventCata.json')
    .then(res => res.json())
    .then(data => {
      const filtered = data.filter(event => {
  const matchKeyword = keyword === '' || event.name.toLowerCase().includes(keyword);
  const matchLocation = eventLocation === '' || (event.venue && event.venue.toLowerCase().includes(eventLocation));
  const matchCategory = category === '' || event.category === category;
  return matchKeyword && matchLocation && matchCategory;
});


      renderEvents(filtered);
    })
    .catch(error => {
      console.error('Error loading events:', error);
      document.getElementById('results').innerText = 'Error loading data.';
    });

  function renderEvents(events) {
    const container = document.getElementById('results');
    container.innerHTML = '';

    if (events.length === 0) {
      container.innerHTML = '<p>No events found.</p>';
      return;
    }

    events.forEach(event => {
      const categoryName = categoryMap[event.category] || 'Unknown';

      const el = document.createElement('div');
      el.className = 'event-card';
      el.classList.add("search-item");
      el.innerHTML = `
        <h3>${event.name}</h3>
        <p><strong>Location:</strong> ${capitalize(event.venue || 'TBA')}</p>
        <p><strong>Category:</strong> ${event.category || 'General'}</p>
        <p><strong>Date:</strong> ${event.date || 'TBA'}</p>
        <p>${event.description}</p>
      `;
      container.appendChild(el);
    });
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }