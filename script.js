/* menu toggle */
const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  menuToggle.addEventListener('click', () => { menu.classList.toggle('active'); });


  // Scroll animation for About section
window.addEventListener("scroll", () => {
  const aboutSection = document.querySelector(".about-container");
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight / 1.2;

  if (sectionTop < triggerPoint) {
    aboutSection.classList.add("show");
  }
});


// Scroll animation for Services
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".service-card");
  const triggerBottom = window.innerHeight / 1.2;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });
});



// Scroll animation for Projects
window.addEventListener("scroll", () => {
  const projects = document.querySelectorAll(".project-card");
  const triggerBottom = window.innerHeight / 1.2;

  projects.forEach(project => {
    const projectTop = project.getBoundingClientRect().top;
    if (projectTop < triggerBottom) {
      project.classList.add("show");
    }
  });
});



// Scroll animation for Testimonials
window.addEventListener("scroll", () => {
  const testimonials = document.querySelectorAll(".testimonial-card");
  const triggerBottom = window.innerHeight / 1.2;

  testimonials.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });
});


// Scroll animation for Contact section
window.addEventListener("scroll", () => {
  const contactElements = document.querySelectorAll(".contact-form, .contact-info");
  const triggerBottom = window.innerHeight / 1.2;

  contactElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < triggerBottom) {
      el.classList.add("show");
    }
  });
});

// Back-to-top button visibility
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});


// Smooth scroll to top
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
