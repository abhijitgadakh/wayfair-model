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
