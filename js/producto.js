const cartIcon = document.querySelector(".header__cart")
const cart = document.querySelector(".cart")

cartIcon.addEventListener("click", ()=> {
    cart.classList.toggle("show")
})

const closeCart = document.querySelector(".cart__close");

closeCart.addEventListener("click", () => {
    cart.classList.toggle("show");
})

const menuIcon = document.querySelector(".header__menu")
const menu = document.querySelector(".menu")

menuIcon.addEventListener("click", ()=> {
    menu.classList.toggle("show")
})

const closeMenu = document.querySelector(".menu__close");

closeMenu.addEventListener("click", () => {
    menu.classList.toggle("show");
})

//Carrito de compras

const count = document.getElementsByClassName("cart__product__section");
let numItems = count.length;
document.getElementById("numItems").innerHTML = numItems;
if (numItems===0) {
    const carApp = document.querySelector('.cart')
    const empty1 = document.createElement('section')
    empty1.setAttribute('class', 'cart__empty')
    const emptyMessage1 = document.createElement('p')
    emptyMessage1.setAttribute('class', 'cart__empty__message')
    emptyMessage1.innerHTML = 'Carrito vacio'
    empty1.append(emptyMessage1)
    carApp.append(empty1)
}

const addCart = document.querySelectorAll(".product_add")
addCart.forEach(elem => {
    
    elem.addEventListener("click", ()=>{

        for (var f=0; f<sessionStorage.length;f++);

        const newElem = elem.parentElement

        const newImg = newElem.querySelector(".product__img")
        const newImgAtt = newImg.getAttributeNode('src')
        const newCartElem = document.createElement('img')
        let a = document.createAttribute("src");
        a.value = newImgAtt.value;
        newCartElem.setAttributeNode(a);

        const newDescrip = newElem.querySelector(".product__description")
        const newDescripElem = document.createElement('p')
        newDescripElem.setAttribute('class', 'cart_product__description')
        let cartnewDescrip = newDescrip.textContent
        newDescripElem.innerHTML = cartnewDescrip

        const newPrice = newElem.querySelector('.product__price')
        const newPriceElem = document.createElement('p')
        newPriceElem.setAttribute('class', 'cart__product__price')
        let cartnewPrice = newPrice.textContent
        newPriceElem.innerHTML = cartnewPrice

        const removeElem = document.createElement('img')
        removeElem.setAttribute('src', '../img/trash-fat.svg')
        removeElem.setAttribute('class', 'remove')

        const carApp = document.querySelector('.cart')
        const node = carApp.querySelector('.cart__comprar__section')

        const newNode = document.createElement("section")
        newNode.setAttribute('class', 'cart__product__section')
              
        carApp.insertBefore(newNode, node)

        newNode.append(newCartElem)

        newNode.append(newDescripElem)

        newNode.append(newPriceElem)

        newNode.append(removeElem)

        const iconRemove = document.querySelectorAll(".remove");

        iconRemove.forEach(elem => {
        elem.addEventListener("click", () => {
            const elemParent = elem.parentElement;
            elemParent.remove();

            //Contador de articulos en carrito
            let numItems = count.length;
            document.getElementById("numItems").innerHTML = numItems;
            console.log(numItems)
            if (numItems===0) {
                const empty1 = document.createElement('section')
                empty1.setAttribute('class', 'cart__empty')
                const emptyMessage1 = document.createElement('p')
                emptyMessage1.setAttribute('class', 'cart__empty__message')
                emptyMessage1.innerHTML = 'Carrito vacio'
                empty1.append(emptyMessage1)
                carApp.append(empty1)

                const buy2 = document.querySelector(".cart__comprar");
                const buyMessage2 = buy2.parentElement;
                buyMessage2.remove();
            }    
        })
    })
    
        let numItems = count.length;
        document.getElementById("numItems").innerHTML = numItems;
        
        if (numItems===1) {
            const empty = document.querySelector(".cart__empty__message");
            const emptyMessage = empty.parentElement;
            emptyMessage.remove();
        
            const buy1 = document.createElement('section')
            buy1.setAttribute('class', 'cart__comprar__section')
            const buyMessage1 = document.createElement('button')
            buyMessage1.setAttribute('class', 'cart__comprar')
            buyMessage1.innerHTML = 'Comprar'
            buy1.append(buyMessage1)
            carApp.append(buy1)
        }
    })
})

//Carrusel producto

var slideIndexCarousel = 1;
showSlidesCarousel(slideIndexCarousel);

// Next/previous controls
function plusSlidesCarousel(m) {
  showSlidesCarousel(slideIndexCarousel += m);
}

// Thumbnail image controls
function currentSlideCarousel(m) {
  showSlidesCarousel(slideIndexCarousel = m);
}

function showSlidesCarousel(m) {
  let j;
  let slidesCarousel = document.getElementsByClassName("carousel__slides");
  let dotsCarousel = document.getElementsByClassName("carousel__img");
  let captionTextCarousel = document.getElementById("carousel__caption");
  if (m > slidesCarousel.length) {slideIndexCarousel = 1}
  if (m < 1) {slideIndexCarousel = slidesCarousel.length}
  for (j = 0; j < slidesCarousel.length; j++) {
    slidesCarousel[j].style.display = "none";
  }
  for (j = 0; j < dotsCarousel.length; j++) {
    dotsCarousel[j].className = dotsCarousel[j].className.replace(" carousel__active", "");
  }
  slidesCarousel[slideIndexCarousel - 1].style.display = "block";
  dotsCarousel[slideIndexCarousel - 1].className += " carousel__active";
  captionTextCarousel.innerHTML = dotsCarousel[slideIndexCarousel-1].alt;
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}