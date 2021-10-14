// Navlist functionality
const navbar = document.querySelector(".navbar");
const navitem = document.querySelectorAll(".navitem");
const close = document.getElementById("close");
const hamburger = document.getElementById("hamburger");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  close.classList.toggle("active");
  hamburger.classList.toggle("active");
  overlay.classList.toggle("active");
});

close.addEventListener("click", () => {
  navbar.classList.toggle("active");
  close.classList.toggle("active");
  hamburger.classList.toggle("active");
  overlay.classList.toggle("active");
});

// Close navlist when a link is clicked

if (document.documentElement.clientWidth < 1024) {
  navitem.forEach((link) =>
    link.addEventListener("click", () => {
      close.click();
    })
  );
}

// Shopping cart functionality
const cart = document.querySelector(".nav-cart");
const shoppingCart = document.querySelector(".shopping-cart");
const items = document.querySelector(".item");
const noItems = document.querySelector(".no-items");
cart.addEventListener("click", () => {
  shoppingCart.classList.toggle("active");
  noItems.classList.toggle("active");
});

// Setting up images for carousel
let i = 0;

images = new Array();

images[0] = new Image();
images[0].src = "styles/images/image-product-1.jpg";
images[1] = new Image();
images[1].src = "styles/images/image-product-2.jpg";
images[2] = new Image();
images[2].src = "styles/images/image-product-3.jpg";
images[3] = new Image();
images[3].src = "styles/images/image-product-4.jpg";

// Switch images in carousel
let mainImg = document.getElementById("mainImg");
const next = document.getElementById("rightArrow");
const prev = document.getElementById("leftArrow");

mainImg.src = images[i].src;

// rotating through image array to display images
const nextImage = () => {
  if (i < images.length - 1) {
    i++;
    mainImg.src = images[i].src;
  } else {
    i = 0;
    mainImg.src = images[i].src;
  }
};

const prevImage = () => {
  if (i > 0) {
    i--;
    mainImg.src = images[i].src;
  } else {
    i = images.length - 1;
    mainImg.src = images[i].src;
  }
};

prev.addEventListener("click", prevImage);
next.addEventListener("click", nextImage);

// Display number of items
const increase = document.getElementById("increaseItem");
const decrease = document.getElementById("decreaseItem");
const numDisplay = document.getElementById("numDisplay");
let j = 0;
numDisplay.textContent = j;
const addItem = () => {
  j++;
  numDisplay.textContent = j;
};

const removeItem = () => {
  if (j > 0) {
    j--;
    numDisplay.textContent = j;
  } else {
    j = 0;
    numDisplay.textContent = j;
  }
};

increase.addEventListener("click", addItem);
decrease.addEventListener("click", removeItem);

// Display notification if items in cart

let notification = document.querySelector(".notification");

console.log(numDisplay.textContent);

const displayNotification = () => {
  // Displays outside of function
  // if statement not working properly, possibly b/c type !=
  if (numDisplay.textContent != 0) {
    notification.classList.toggle("active");
    notification.textContent = numDisplay.textContent;
  }
};

displayNotification();

// Figure out what type numDisplay.textContent is
// I only want the number on the notification to change if Add to cart btn pushed
