// preloader
$(document).ready(function() {
    setTimeout(function() {
      $('#container').addClass('loaded');
      // Once the container has finished, the scroll appears
      if ($('#container').hasClass('loaded')) {
        // It is so that once the container is gone, the entire preloader section is deleted
        $('#preloader').delay(9000).queue(function() {
          $(this).remove();
        });}
    }, 3000);});






document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.getElementById("scroll-to-top");

    // Add a click event listener to the button
    scrollToTopButton.addEventListener("click", function() {
        // Scroll to the top of the document
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Use smooth scrolling if supported
        });
    });

    // Show/hide the button based on scroll position
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });
});
