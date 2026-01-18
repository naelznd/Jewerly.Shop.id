/* ================= CAROUSEL ================= */
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlides() {
  if (!slides.length) return;

  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slideIndex = (slideIndex + 1) % slides.length;

  slides[slideIndex].classList.add("active");
  if (dots[slideIndex]) dots[slideIndex].classList.add("active");

  setTimeout(showSlides, 5000);
}

document.addEventListener("DOMContentLoaded", showSlides);


/* ================= BURGER MENU (ONCLICK) ================= */
document.addEventListener("DOMContentLoaded", () => {
    const burgerBtn = document.getElementById("burgerBtn");
    const navlinks = document.getElementById("navLinks");
    const dropdowns = document.querySelectorAll(".dropdown"); // diperbaiki

    burgerBtn.addEventListener("click", () => {
        navlinks.classList.toggle("show");

        if (!navlinks.classList.contains("show")) {
            dropdowns.forEach(d => d.classList.remove("open"));
        }
    });
});


/* ================= MODAL ALERT ================= */
const modalAlert = document.getElementById("modal-alert");
const tombolTutup = document.getElementById("tombol-tutup");

function tampilkanModalAlert() {
  modalAlert.classList.remove("hidden");
}

function tutupModalAlert() {
  modalAlert.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", tampilkanModalAlert);
tombolTutup.addEventListener("click", tutupModalAlert);


/* ================= TESTIMONIAL ANIMATION ================= */
const testimonialCards = document.querySelectorAll(".testimonial-card");

testimonialCards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";

  setTimeout(() => {
    card.style.transition = "0.6s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, index * 150);
});


/* ================= SPOTIFY BUTTON ================= */
const spotifyBtn = document.getElementById("spotifyBtn");

if (spotifyBtn) {
  spotifyBtn.addEventListener("click", () => {
    window.open(
      "https://open.spotify.com/artist/5xXj2bZkQp7L1MlbvZyM0h",
      "_blank"
    );
  });
}


/* ================= DARK MODE (ONCLICK - FIX) ================= */
const themeToggle = document.getElementById("themeToggle");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");
        themeToggle.textContent = isDark ? "☀️" : "🌙";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });


