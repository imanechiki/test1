document.addEventListener('DOMContentLoaded', function() {
    const aboutHeading = document.getElementById('about-heading');
    let isRed = false; // Track the current text color state
  
    aboutHeading.addEventListener('click', function() {
      if (isRed) {
        aboutHeading.style.color = 'initial'; // Set it back to the initial color
      } else {
        aboutHeading.style.color = 'red'; // Change the text color to red
      }
      isRed = !isRed; // Toggle the state
    });
  });
  