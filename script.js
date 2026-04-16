const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const buyBtn = document.getElementById("buyBtn");

buyBtn.addEventListener("click", () => {
  alert("Thank you for your interest!");
});