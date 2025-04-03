// This file contains renderer process code
// You can add DOM manipulation and UI logic here

document.addEventListener('DOMContentLoaded', () => {
  console.log('Renderer process started');
  
  // Add event listeners to control buttons
  const playButton = document.querySelector('.btn-primary');
  const stopButton = document.querySelector('.btn-secondary');
  
  if (playButton) {
    playButton.addEventListener('click', () => {
      console.log('Play button clicked');
      // Add your play functionality here
    });
  }
  
  if (stopButton) {
    stopButton.addEventListener('click', () => {
      console.log('Stop button clicked');
      // Add your stop functionality here
    });
  }
  
  // Add event listeners to pads
  const pads = document.querySelectorAll('.grid > div');
  pads.forEach((pad, index) => {
    pad.addEventListener('click', () => {
      console.log(`Pad ${index + 1} clicked`);
      // Highlight the selected pad
      pads.forEach(p => p.classList.remove('bg-dark-primary'));
      pad.classList.add('bg-dark-primary');
      pad.classList.remove('bg-dark-surface');
      // Add your pad selection functionality here
    });
  });
}); 