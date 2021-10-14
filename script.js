// Navlist functionality
const navbar = document.querySelector(".navbar");
const navitem = document.querySelectorAll(".navitem");
const close = document.getElementById("close");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  close.classList.toggle("active");
  hamburger.classList.toggle("active");
});

close.addEventListener("click", () => {
  navbar.classList.toggle("active");
  close.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Shopping cart functionality
const cart = document.querySelector(".nav-cart");
const shoppingCart = document.querySelector(".shopping-cart");
const items = document.querySelector(".item");
const noItems = document.querySelector(".no-items");
cart.addEventListener("click", () => {
  shoppingCart.classList.toggle("active");
  noItems.classList.toggle("active");
});
