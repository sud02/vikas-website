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



