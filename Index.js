const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const carouselInner = document.querySelector(".carousel-inner");
const items = document.querySelectorAll(".carousel-item");
const itemsVisible = 5;
let currentIndex = 0;

const updateCarousel = () => {
  if (currentIndex * (100 / itemsVisible) <= 40) {
    carouselInner.style.transform = `translateX(-${
      currentIndex * (100 / itemsVisible)
    }%)`;
  }
};

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 2;
    if (currentIndex < 0) currentIndex = 0;
    updateCarousel();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < items.length - itemsVisible) {
    currentIndex += 2;
    if (currentIndex > items.length - itemsVisible)
      currentIndex = items.length - itemsVisible;
    updateCarousel();
  }
});

// Initialize carousel position
updateCarousel();

const searchInput = document.querySelector(".search-input");
const textInputBox = document.querySelector(".text-input");

searchInput.addEventListener("click", () =>
  textInputBox.classList.add("theme-border")
);

searchInput.addEventListener("blur", () =>
  textInputBox.classList.remove("theme-border")
);

////////////////////// CART ///////////////////////////

function openCart() {
  console.log("hello");
  const blurDiv = document.querySelector(".active-blur");
  const cartDiv = document.querySelector(".cart-slider");
  // blurDiv.style.display = "none";
  cartDiv.classList.remove("hide");

  blurDiv.style.display = "block";
}

function closeCart() {
  console.log("hello");
  const blurDiv = document.querySelector(".active-blur");
  const cartDiv = document.querySelector(".cart-slider");
  // blurDiv.style.display = "none";
  cartDiv.classList.add("hide");
  blurDiv.style.display = "none";
}

const cartOpen = document.getElementById("open-cart");
const cartClose = document.querySelector(".close-icon");

cartOpen.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
