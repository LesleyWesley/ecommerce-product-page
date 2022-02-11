//Variables



//Selects lightbox_active
const lightbox = document.querySelector(".lightbox");

//Selects close icon for lightbox

const lightboxClose = document.querySelector(".lightbox_header img");

//Selects cart icon

const cartIcon = document.querySelector(".cart-div");

//Selects actual cart

const cart = document.querySelector(".cart");

//Selects minus icon

const minus = document.querySelector(".minus");

//Selects plus icon

const plus = document.querySelector(".plus");

//Selects quantity input

const quantityInput = document.querySelector("#quantity");

//Add to cart button

const addToCartButton = document.querySelector(".submit");

//Cart Quantity span

const cartQuantityDiv = document.querySelector(".cart-count");

//Selects main content of cart when full

const fullCartContent = document.querySelector(".cart-main");

//Selects Checkout button in cart

const checkoutButton = document.querySelector(".checkout-button");

//Selects message in cart when empty

const emptyMessage = document.querySelector(".cart-empty");

//Selects display of cart quantity inside cart

const cartQuantitySpan = document.querySelector(".cart-quantity");

//Selects total price in cart

const totalPrice = document.querySelector(".cart-total");

//Selects delete icon in cart

const remove = document.querySelector(".delete");

//Selects cart side of header

const cartSide = document.querySelector(".cart-side");

//Selects menu toggler

const toggler = document.querySelector(".toggler");

//Selects menu wrap

const menuWrap = document.querySelector(".menu-wrap");

//Selects photo carousel buttons

const next = document.querySelector(".next");

const previous = document.querySelector(".previous");

//Selects photo carousel

const photoCarousel = document.querySelector(".mobile-photo-section");

//Selects main image of desktop photo display

const mainImage = document.querySelector(".main-image");

//Selects thumbnails for desktop photo display

const t1 = document.querySelector(".thumbnail-1");
const t2 = document.querySelector(".thumbnail-2");
const t3 = document.querySelector(".thumbnail-3");
const t4 = document.querySelector(".thumbnail-4");

//Selects close button of lightbox

const close = document.querySelector(".close");

//Selects main image in lightbox

const lightboxMain = document.querySelector(".lightbox_active-image");

//Selects lightbox arrows

const lightboxPrevious = document.querySelector(".lightbox-previous");

const lightboxNext = document.querySelector(".lightbox-next");

//Selects thumbnails in lightbox

const lt1 = document.querySelector(".lightbox_thumbnail-section .thumbnail-1");
const lt2 = document.querySelector(".lightbox_thumbnail-section .thumbnail-2");
const lt3 = document.querySelector(".lightbox_thumbnail-section .thumbnail-3");
const lt4 = document.querySelector(".lightbox_thumbnail-section .thumbnail-4");

//Contents of cart (number)

let cartQuantity = 0;

//Photo Carousel Index

let i = 1;

//============================================================





//============================================================

//Fixes issue with cart side of header being in front of mobile menu

toggler.addEventListener("click", function() {
  if (toggler.checked) {
    cartSide.style.zIndex = "0";
    menuWrap.style.width = "100vw";
  } else {
    cartSide.style.zIndex = "1";
    menuWrap .style.width = "0%";
  }
})

//============================================================

//Cycles to next image on photo carousel when next button is clicked

const showNext = function () {
  if (i === 4) {
      photoCarousel.classList.remove(`image-${i}`);
      i = 1;
      photoCarousel.classList.add(`image-${i}`);
  } else {
    photoCarousel.classList.remove(`image-${i}`);
      i++;
    photoCarousel.classList.add(`image-${i}`);
}
}

next.addEventListener("click", function () {
  showNext();
})

//============================================================

//Cycles to previous image on photo carousel when previous button is clicked

const showPrevious = function() {
  if (i === 1) {
    photoCarousel.classList.remove(`image-${i}`);
    i = 4;
    photoCarousel.classList.add(`image-${i}`);
  } else {
    photoCarousel.classList.remove(`image-${i}`);
    i--;
    photoCarousel.classList.add(`image-${i}`);
  }
}

previous.addEventListener("click", function() {
  showPrevious();
})

//============================================================

//Display correct photo in main image based on which thumbnail is clicked

t1.addEventListener("click", function() {
  removeImage();
  mainImage.classList.add("image-1");
  removeActive();
  t1.classList.remove("thumbnail-1");
  t1.classList.add("active-1");
})

t2.addEventListener("click", function() {
  removeImage();
  mainImage.classList.add("image-2");
  removeActive();
  t2.classList.remove("thumbnail-2");
  t2.classList.add("active-2");
})

t3.addEventListener("click", function() {
  removeImage();
  mainImage.classList.add("image-3");
  removeActive();
  t3.classList.remove("thumbnail-3");
  t3.classList.add("active-3");
})

t4.addEventListener("click", function() {
  removeImage();
  mainImage.classList.add("image-4");
  removeActive();
  t4.classList.remove("thumbnail-4");
  t4.classList.add("active-4");
})

const removeImage = function() {
    mainImage.classList.remove("image-1");
    mainImage.classList.remove("image-2");
    mainImage.classList.remove("image-3");
    mainImage.classList.remove("image-4");
}

const removeActive = function() {
    t1.classList.remove("active-1");
    t1.classList.add("thumbnail-1");
    t2.classList.remove("active-2");
    t2.classList.add("thumbnail-2");
    t3.classList.remove("active-3");
    t3.classList.add("thumbnail-3");
    t4.classList.remove("active-4");
    t4.classList.add("thumbnail-4");
}

//============================================================

//Adds ability to add or subtract quantity using plus and minus icons

plus.addEventListener("click", function() {
  quantityInput.value++;
})

minus.addEventListener("click", function() {
  if (quantityInput.value > 0){
      quantityInput.value--;
  }
})

//============================================================

//When "Add to Cart" is clicked, quantity input becomes new quantity of cart, and is then reset to 0

addToCartButton.addEventListener("click", function () {
  if (quantityInput.value > 0) {
    //!!Need to fix the following line!!
    cartQuantity = quantityInput.value;
    quantityInput.value = 0;
    console.log(cartQuantity);

    cartQuantityDiv.classList.remove("hide");
    cartQuantityDiv.innerText = `${cartQuantity}`;

    emptyMessage.classList.add("hide");
    fullCartContent.classList.remove("hide");
    checkoutButton.classList.remove("hide");

    cartQuantitySpan.innerText = `${cartQuantity}`;
    totalPrice.innerText = `$${125 * cartQuantity}.00`;
  }
})

//============================================================

//Empties cart when delete button is clicked

remove.addEventListener("click", function() {
  cartQuantity = 0;
  console.log(cartQuantity);
  emptyMessage.classList.remove("hide");
  fullCartContent.classList.add("hide");
  checkoutButton.classList.add("hide");
  cartQuantityDiv.classList.add("hide");
})


//============================================================

//Adds ability to open cart when cart div is clicked

cartIcon.addEventListener("click", function() {
  if (cart.classList.contains("hide")) {
    cart.classList.remove("hide");
  } else {
    cart.classList.add("hide");
  }
})


//============================================================

//Adds ability to open and close lightbox

mainImage.addEventListener("click", function() {
  lightbox.classList.remove("hide");
})

close.addEventListener("click", function() {
  lightbox.classList.add("hide");
})



//===========================================================
