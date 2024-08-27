//delaying the scrolling of carousel
  // Initialize the carousel
  var myCarousel = document.querySelector('#demo');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 15000, // 3 seconds for demonstration
    ride: 'carousel'
  });

  // Function to manually cycle the carousel after a delay
  function delayedCycle() {
    setInterval(() => {
      carousel.next();
    }, 15000); // 5 seconds delay
  }

  // Start the delayed cycle
  delayedCycle();




  //dropdown js
  document.querySelectorAll('.btn-link').forEach(function(button) {
    button.addEventListener('click', function() {
        let icon = this.querySelector('.toggle-icon');
        if (icon.textContent === "+") {
            icon.textContent = "-";
        } else {
            icon.textContent = "+";
        }

        // Scroll to the toggled element immediately
        this.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});



const slider = document.getElementById('mobileSlider');
const barContainer = document.getElementById('barContainer');
const images = slider.getElementsByTagName('img');
const numImages = images.length;

// Create a segment for each image
for (let i = 0; i < numImages; i++) {
  const segment = document.createElement('div');
  segment.classList.add('bar-segment');
  if (i === 0) segment.classList.add('active'); // Set the first segment as active
  barContainer.appendChild(segment);
}

// Function to update the active segment based on scroll position
function updateActiveSegment() {
  const scrollLeft = slider.scrollLeft;
  const imageWidth = slider.clientWidth;
  const currentIndex = Math.round(scrollLeft / imageWidth);

  const segments = barContainer.getElementsByClassName('bar-segment');
  for (let i = 0; i < segments.length; i++) {
    segments[i].classList.remove('active');
  }
  segments[currentIndex].classList.add('active');
}

// Attach the scroll event listener to update the active segment
slider.addEventListener('scroll', updateActiveSegment);


