const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuBurger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const asideCar = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

navbarEmail.addEventListener("click", toggleDesktopMenu);
menuBurger.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleAsideCar);

function toggleDesktopMenu() {
  console.log("click");
  desktopMenu.classList.toggle("inactive");
  asideCar.classList.add("inactive");
}
function toggleMobileMenu() {
  console.log("click2");
  mobileMenu.classList.toggle("inactive");
  asideCar.classList.add("inactive");
}

// function toggleMobileMenu() {
//   const isAsideClosed = aside.classList.contains("inactive");
//   if (!isAsideClosed) {
//     aside.classList.add("inactive");
//   }
//   mobileMenu.classList.toggle("inactive");
// }
// function toggleCarritoAside() {
//   const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
//   if (!isMobileMenuClosed) {
//     mobileMenu.classList.add("inactive");
//   }
//   aside.classList.toggle("inactive");
// }

function toggleAsideCar() {
  console.log("click3");
  mobileMenu.classList.add("inactive");
  asideCar.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
  //const isMobileMenuClosed = !mobileMenu.classList.contains("inactive");

  //   const isAsideClosed = !asideCar.classList.contains("inactive");

  //   if (isAsideClosed) {
  //     //abrir aside carsc

  //   } else {
  //       asideCar.classList.add("inactive");
  //     }
  //   }

  //   if (isMobileMenuClosed) {
  //   }
}

const productsList = [];
productsList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productsList.push({
  name: "Pantalla",
  price: 320,
  image:
    "https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productsList.push({
  name: "PC",
  price: 498,
  image:
    "https://images.pexels.com/photos/9072307/pexels-photo-9072307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

// for (product in productsList) {
//   console.log(product);
// }
function renderProduct(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    // productInfoDiv.appendChild(productPrice);
    // productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    //figure y div dentro de productInfo
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    //producInfo e img dentro de Productcard
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProduct(productsList);
