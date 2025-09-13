// Set your event date here
const eventDate = new Date("September 23, 2025 00:00:00").getTime();

let daysEl, hoursEl, minutesEl, secondsEl;
let timer;

function getElements() {
  daysEl = document.getElementById("days");
  hoursEl = document.getElementById("hours");
  minutesEl = document.getElementById("minutes");
  secondsEl = document.getElementById("seconds");
  
  return daysEl && hoursEl && minutesEl && secondsEl;
}

function updateCountdown() {
  if (!getElements()) {
    console.log("Timer elements not found, retrying...");
    return;
  }

  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  if (timeLeft <= 0) {
    clearInterval(timer);
    if (daysEl) daysEl.textContent = "00";
    if (hoursEl) hoursEl.textContent = "00";
    if (minutesEl) minutesEl.textContent = "00";
    if (secondsEl) secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
  if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
  if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
  if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");
}

function startTimer() {
  if (getElements()) {
    timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
    console.log("Timer started successfully!");
  } else {
    console.log("Timer elements not ready, retrying in 100ms...");
    setTimeout(startTimer, 100);
  }
}

// Start the timer when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startTimer);
} else {
  startTimer();
}




  function updateDateTime() {
    const now = new Date();
    const options = {
      weekday: 'long', year: 'numeric', month: 'long',
      day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
    };
    document.getElementById("current-time").innerHTML = now.toLocaleString('en-US', options);
  }

  setInterval(updateDateTime, 1000);
  updateDateTime(); // Initial call
