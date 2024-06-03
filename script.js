window.onload = function() {
  const date = new Date();
  const hour = date.getHours();
  const year = document.getElementById('year');
  const timeImage = document.getElementById('timeImage');
  const message = document.getElementById('message');

  if (hour >= 5 && hour < 12) {
    // Morning
    document.body.className = 'morning';
    timeImage.src = 'timeImage/morning.jpg';
    message.textContent = 'Good Morning!';
  } else if (hour >= 12 && hour < 18) {
    // Afternoon
    document.body.className = 'afternoon';
    timeImage.src = 'timeImage/afternoon.jpeg';
    message.textContent = 'Good Afternoon!';
  } else if (hour >= 18 && hour < 23) {
    // Evening
    document.body.className = 'evening';
    timeImage.src = 'timeImage/evening.jpg';
    message.textContent = 'Good Evening!';
  } else {
    // Night
    document.body.className = 'night';
    timeImage.src = 'timeImage/night.jpeg';
    message.textContent = 'Good Night!';
  }

  year.textContent = date.getFullYear();
}