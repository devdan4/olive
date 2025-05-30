document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

function sendMail(event) {
  event.preventDefault();
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    subject: document.getElementById("subject").value
  }

    emailjs.send('service_qwgqler', 'template_d7plgph', parms)
    .then(() => {
      alert('Message sent successfully!');
      document.getElementById("contact-form").reset();
    }, (error) => {
      alert('Failed to send the message. Please try again later.');
      console.error('EmailJS error:', error);
    });
};

  