let carro = [];
const counterCart = document.getElementById("counterCart");
const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuBurger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const asideCar = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");

const orderContent = document.querySelector(".my-order-content");
const imgProductDetail = document.querySelector("#imgProductDetail");
navbarEmail.addEventListener("click", toggleDesktopMenu);
menuBurger.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleAsideCar);
imgProductDetail.addEventListener("click", toggleProductDetail);

function toggleProductDetail() {
  console.log("click prueba");
  imgProductDetail.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
  asideCar.classList.add("inactive");
  mobileMenu.classList.add("inactive");
}

function toggleDesktopMenu() {
  console.log("click");
  productDetail.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
  asideCar.classList.add("inactive");
}
function toggleMobileMenu() {
  console.log("click2");
  productDetail.classList.add("inactive");
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
  productDetail.classList.add("inactive");
  carro.forEach((product) => {
    const shoppingCart = document.createElement("div");
    shoppingCart.classList.add("shopping-cart");

    const figureCart = document.createElement("figure");
    //figureCart.classList.add("figure-cart");
    const imgCart = document.createElement("img");
    imgCart.setAttribute("src", product.image);
    //imgCart.className = "img-cart";
    figureCart.appendChild(imgCart);

    const pCart = document.createElement("p");
    pCart.innerText = product.name;

    const priceCart = document.createElement("p");
    priceCart.innerText = "$" + product.price;

    const imgCloseCart = document.createElement("img");
    imgCloseCart.setAttribute("src", "./icons/icon_close.png");

    shoppingCart.append(figureCart, pCart, priceCart, imgCloseCart);
    orderContent.appendChild(shoppingCart);
  });
  const orderTotal = document.createElement("div");
  orderTotal.classList.add("order");
  const pTotal = document.createElement("p");
  const spanTotal = document.createElement("span");
  pTotal.appendChild(spanTotal);
  const priceTotal = document.createElement("p");
  priceTotal.innerText = "$560";
  orderTotal.append(pTotal, priceTotal);

  const btnCheckout = document.createElement("button");
  btnCheckout.innerText = "Checkout";
  btnCheckout.classList.add("primary-button");

  orderContent.append(orderTotal, btnCheckout);

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
  id: 1,
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  cantidad: 1,
});
productsList.push({
  id: 2,
  name: "Pantalla",
  price: 320,
  image:
    "https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  cantidad: 1,
});
productsList.push({
  id: 3,
  name: "PC",
  price: 498,
  image:
    "https://images.pexels.com/photos/9072307/pexels-photo-9072307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  cantidad: 1,
});

// for (product in productsList) {
//   console.log(product);
// }
function renderProduct(arr) {
  // for (product of arr)
  arr.forEach((product) => {
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
    const btnImg = document.createElement("button");
    btnImg.classList.add("btnImg");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    btnImg.appendChild(productImgCart);
    productInfoFigure.appendChild(btnImg);
    btnImg.addEventListener("click", () => agregarAlCarrito(product));

    //figure y div dentro de productInfo
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    //producInfo e img dentro de Productcard
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  });
}

function agregarAlCarrito(product) {
  const repeat = carro.some((repeatProduct) => repeatProduct.id === product.id);
  if (repeat) {
    carro.map((prod) => prod.id === product.id && prod.cantidad++);
  } else {
    carro.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      cantidad: product.cantidad,
    });
  }
  // repeat
  //   ? carro.map((prod) => {
  //       prod.id === product.id && prod.cantidad++;
  //       console.log("repetido");
  //     })
  //   : carro.push({
  //       id: product.id,
  //       img: product.img,
  //       nombre: product.nombre,
  //       precio: product.precio,
  //       cantidad: product.cantidad,
  //     }) && console.log("NO repetido");
  console.log(carro);
}
renderProduct(productsList);
