// Responsive Navbar Toggle
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});

// Search Flights Functionality
function searchFlights() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let departure = document.getElementById("departure").value;
    let returnDate = document.getElementById("return").value;
    let passengers = document.getElementById("passengers").value;
    let travelClass = document.getElementById("class").value;

    if (from && to && departure) {
        alert(`Searching flights from ${from} to ${to} on ${departure}.`);
    } else {
        alert("Please fill in all required fields.");
    }
}



// For Active Link Highlighting
const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
});


// Clickable card navigation
document.querySelectorAll('.offer-card, .card, .destination-card, .review-card').forEach(card => {
        card.addEventListener('click', () => {
            const link = card.getAttribute('data-link');
            if (link) {
                window.location.href = link;
            }
        });
    });


 // Make Cards Clickable to Navigate to New Pages
document.addEventListener("DOMContentLoaded", () => {
    const clickableCards = document.querySelectorAll("[data-link]");
    clickableCards.forEach(card => {
      card.addEventListener("click", () => {
        const link = card.getAttribute("data-link");
        if (link) {
          window.location.href = link;
        }
      });
    });
  });
  

// Contact Form Validation and Submission Feedback
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }
  
    alert(`Thanks for reaching out, ${name}! We'll get back to you shortly.`);
    this.reset();
  });
  

// Card click navigation
document.querySelectorAll('[data-link]').forEach(card => {
    card.addEventListener('click', () => {
        const link = card.getAttribute('data-link');
        if (link) {
            window.location.href = link;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const clickableCards = document.querySelectorAll("[data-link]");

    clickableCards.forEach(card => {
        card.addEventListener("click", () => {
            const link = card.getAttribute("data-link");
            if (link) {
                window.location.href = link;
            }
        });
    });
});


// Contact form validation and submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Basic Validation
    if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        alert('Please fill in all fields!');
        return;
    }

    // Basic email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        alert('Please enter a valid email address!');
        return;
    }

    // Show feedback (you can style this better)
    alert('Message Sent Successfully!');
    
    // Optionally clear the form
    name.value = '';
    email.value = '';
    message.value = '';
});





document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate form submission
    alert("Thank you for contacting us, " + name + "! We'll get back to you soon.");

    // Optionally clear the form
    this.reset();
});

