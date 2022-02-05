//Variables


//Selects main image on desktop browser
const mainImage = document.querySelector(".highlighted-image");

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

//Selects mobile image carousel forward and back buttons

const mobileForward = document.querySelector(".forward");

const mobileBackward = document.querySelector(".back");

//Contents of cart (number)

let cartQuantity = 0;

//============================================================

mobileForward.addEventListener("click", function() {
  console.log("hi!");
})

mobileBackward.addEventListener("click", function() {
  console.log("howdy!");
})


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

lightboxClose.addEventListener("click", function() {
  lightbox.classList.add("hide");
})

//===========================================================
