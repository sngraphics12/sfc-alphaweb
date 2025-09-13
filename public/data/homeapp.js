
  fetch('/data/featuredEvents.json')   
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('featured_events');

      data.forEach(card => {
        const col = document.createElement('div');
        col.className = 'f-event-container';

        col.innerHTML = ` 
                                    <div class="f-event-box">
                                        <div class="event-thumb">
                                            <img decoding="async"
                                                src="${card.image}"
                                                alt="${card.title}">
                                        </div>
                                        <div class="event-content">
                                            <h2 class="title">
                                                <a href="#">${card.title}</a>
                                            </h2>
                                            <ul class="event-meta">
                                                <li class="date">
                                                    <i class="fa-regular fa-calendar-days"></i>
                                                    <span>${card.date}</span>
                                                </li>
                                            </ul>
                                            <div class="event-footer">
                                                <div class="organizer">
                                                    <span>Organized By</span>
                                                    <a class="set-vendor">${card.organiner}</a>
                                                </div>
                                                <div class="event-button">
                                                    <a href="#">View Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
        `;

        container.appendChild(col);
      });
    })
    
