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
addCart.forEach((elem) => {

    elem.addEventListener("click", ()=>{
        
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

        iconRemove.forEach((elem, f) => {
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

//Carrusel Más buscados

let slideIndex = 0;
    showSlides();
    
function showSlides() {
      let i;
      let slides = document.getElementsByClassName("wantedSheet");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//Animación product__img

const product = document.querySelectorAll(".product__img");

product.forEach((cadaproduct, i) => {
    product[i].addEventListener("mouseenter", () => {
        product[i].style.opacity = ".5";
    })
});

product.forEach((cadaproduct, i) => {
    product[i].addEventListener("mouseleave", () => {
        product[i].style.opacity = "1";
    })
});