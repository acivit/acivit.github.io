const slider = document.getElementById('timeline-slider');
const events = document.querySelectorAll('.event');

slider.addEventListener('input', () => {
  const value = slider.value;
  events.forEach((event, index) => {
    const position = (index + 1) * 100 / (events.length + 1);
    event.style.left = `${position + value}%`;
  });
});