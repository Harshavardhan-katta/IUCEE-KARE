document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      form.outerHTML = '<div class="thank-you">Thank you for contacting IUCEE KARE! We will get back to you soon.</div>';
    });
  }
});
