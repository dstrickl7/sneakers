// Navbar functionality
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

// Display cart notification when add to cart button pushed

let notification = document.querySelector(".notification");
const addBtn = document.getElementById("addBtn");
let haveItems = false;
let itemCount = 0;

const displayNotification = () => {
  if (Number(numDisplay.textContent) !== 0 && haveItems === false) {
    notification.classList.toggle("active");
    notification.textContent = numDisplay.textContent;
    haveItems = true;
  } else if (Number(numDisplay.textContent) !== 0 && haveItems === true) {
    notification.textContent =
      Number(notification.textContent) + Number(numDisplay.textContent);
    haveItems = true;
    itemCount = notification.textContent;
  }
};

addBtn.addEventListener("click", displayNotification);

// Shopping cart functionality
const cart = document.querySelector(".nav-cart");
const shoppingCart = document.querySelector(".shopping-cart");
const items = document.querySelector(".item");
const noItems = document.querySelector(".no-items");
const checkout = document.querySelector(".checkout");
let total = document.querySelector(".cart-total");
let price = document.querySelector(".product-price");

// Display items in cart once added
cart.addEventListener("click", () => {
  if (haveItems === true) {
    shoppingCart.classList.toggle("active");
    items.classList.toggle("active");
    checkout.classList.toggle("active");
    price.textContent = "$125 x " + Number(notification.textContent);
    total.textContent = "$" + 125 * Number(notification.textContent);
  } else {
    shoppingCart.classList.toggle("active");
    noItems.classList.toggle("active");
  }
});

// Remove items in cart and remove notification
const remove = document.querySelector("#remove");

remove.addEventListener("click", () => {
  items.classList.toggle("active");
  checkout.classList.toggle("active");
  noItems.classList.toggle("active");
  haveItems = false;
  notification.classList.toggle("active");
  notification.textContent = "";
});

// Lightbox
const lightbox = document.querySelector(".lightbox");
let productImgs = document.querySelectorAll(".product");
const lbClose = document.querySelector(".lightbox-close-btn");
let k = 0;

const displayLightbox = () => {
  productImgs.forEach((product) =>
    product.addEventListener("click", () => {
      lightbox.classList.toggle("active");
      overlay.classList.toggle("active");
      switch (product.id) {
        case "product1":
          lightboxImg.src = images[0].src;
          k = 0;
          break;
        case "product2":
          lightboxImg.src = images[1].src;
          k = 1;
          break;
        case "product3":
          lightboxImg.src = images[2].src;
          k = 2;
          break;
        case "product4":
          lightboxImg.src = images[3].src;
          k = 3;
          break;
        default:
          lightboxImg.src = images[0].src;
          k = 0;
      }
    })
  );
};

lbClose.addEventListener("click", () => {
  lightbox.classList.toggle("active");
  overlay.classList.toggle("active");
});

if (document.documentElement.clientWidth >= 1024) {
  displayLightbox();
}

// rotating through image array to display images in lightbox
let lightboxImg = document.querySelector(".lightbox-main-img");
const lbPrev = document.querySelector(".lightbox-prev-btn");
const lbNext = document.querySelector(".lightbox-next-btn");

// lightboxImg.src=;

const nextLBImage = () => {
  if (k < images.length - 1) {
    k++;
    lightboxImg.src = images[k].src;
  } else {
    k = 0;
    lightboxImg.src = images[k].src;
  }
};

const prevLBImage = () => {
  if (k > 0) {
    k--;
    lightboxImg.src = images[k].src;
  } else {
    k = images.length - 1;
    lightboxImg.src = images[k].src;
  }
};

lbPrev.addEventListener("click", prevLBImage);
lbNext.addEventListener("click", nextLBImage);

// Open specific image as main image if clicked in lightbox
let lbImgs = document.querySelectorAll(".lightbox-thumbnail");

const switchLightbox = () => {
  lbImgs.forEach((image) =>
    image.addEventListener("click", () => {
      switch (image.id) {
        case "lbImg1":
          lightboxImg.src = images[0].src;
          k = 0;
          break;
        case "lbImg2":
          lightboxImg.src = images[1].src;
          k = 1;
          break;
        case "lbImg3":
          lightboxImg.src = images[2].src;
          k = 2;
          break;
        case "lbImg4":
          lightboxImg.src = images[3].src;
          k = 3;
          break;
        default:
          lightboxImg.src = images[0].src;
          k = 0;
      }
    })
  );
};

switchLightbox();
