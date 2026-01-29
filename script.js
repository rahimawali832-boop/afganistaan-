window.addEventListener("load", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    el.classList.add("active");
  });
});
const toggleBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  
  // Optional: animate hamburger to X
  toggleBtn.classList.toggle("open");
});

function toggleInfo(card) {
  // Remove 'active' from all cards
  const allCards = document.querySelectorAll('.city-card');
  allCards.forEach(c => {
    if(c !== card) c.classList.remove('active');
  });

  // Toggle active class on clicked card
  card.classList.toggle('active');
}
window.addEventListener("load", () => {
 // const loader = document.getElementById("page-loader");
  //const content = document.getElementById("page-content");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

    setTimeout(() => {
      loader.style.display = "none";
      content.classList.remove("hidden");
      content.classList.add("visible");
    }, 600);

  }, 2000); // 2-second simulated loading
});
// Footer Reveal on Scroll
const revealElements = document.querySelectorAll('.reveal');

function revealFooter() {
  const windowHeight = window.innerHeight;
  const revealPoint = 150; // how early it shows

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealFooter);
window.addEventListener('load', revealFooter);
// Scroll buttons
const scrollTopBtn = document.getElementById('scrollTop');
const scrollBottomBtn = document.getElementById('scrollBottom');

// Show/hide ScrollTop button
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }

  // Optional: show ScrollBottom button only when not at bottom
  if ((window.innerHeight + window.scrollY) < document.body.offsetHeight - 100) {
    scrollBottomBtn.classList.add('show');
  } else {
    scrollBottomBtn.classList.remove('show');
  }
});

// Smooth Scroll Up
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth Scroll Down
scrollBottomBtn.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});
