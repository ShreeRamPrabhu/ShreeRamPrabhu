// Adding an event listener for smooth scrolling to the "Contact" section
document.querySelector('.contact-button').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
      top: document.querySelector('#contact').offsetTop,
      behavior: 'smooth'
    });
  });
  