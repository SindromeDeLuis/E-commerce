const products1 = [
    p1 = {
        name: "Cartoon Astronaut",
        category: "T-Shirt",
        brand: "brand",
        rating: 4,
        price: 78,
        img: "f1.jpg",
    },
    p2 = {
        name: "Product Name",
        category: "T-Shirt",
        brand: "brand",
        rating: 5,
        price: 68,
        img: "f2.jpg",
    },
    p3 = {
        name: "Product Name",
        category: "T-Shirt",
        brand: "brand",
        rating: 3,
        price: 70,
        img: "f3.jpg",
    },
    p4 = {
        name: "Product Name",
        category: "T-Shirt",
        brand: "brand",
        rating: 4,
        price: 56,
        img: "f4.jpg",
    },
    p5 = {
        name: "Product Name",
        category: "category",
        brand: "brand",
        rating: 4,
        price: 78,
        img: "f5.jpg",
    },
    p6 = {
        name: "Product Name",
        category: "category",
        brand: "brand",
        rating: 4,
        price: 54,
        img: "f6.jpg",
    },
    p7 = {
        name: "Product Name",
        category: "category",
        brand: "brand",
        rating: 5,
        price: 80,
        img: "f7.jpg",
    },
    p8 = {
        name: "Product Name",
        category: "category",
        brand: "brand",
        rating: 4,
        price: 35,
        img: "f8.jpg",
    },
]

const products2 = [
    p1 = {
        name: "Product Name",
        category: "T-Shirt",
        brand: "brand",
        rating: 4,
        price: 78,
        img: "n1.jpg",
    },
    p2 = {
        name: "Product Name",
        category: "T-Shirt",
        brand: "brand",
        rating: 5,
        price: 68,
        img: "n2.jpg",
    },
    p3 = {
        name: "Product Name",
        category: "T-Shirt",
        brand: "brand",
        rating: 3,
        price: 70,
        img: "n3.jpg",
    },
    p4 = {
        name: "Product Name",
        category: "T-Shirt",
        brand: "brand",
        rating: 4,
        price: 56,
        img: "n4.jpg",
    },
    p5 = {
        name: "Product Name",
        category: "category",
        brand: "brand",
        rating: 4,
        price: 78,
        img: "n5.jpg",
    },
    p6 = {
        name: "Product Name",
        category: "category",
        brand: "brand",
        rating: 4,
        price: 35,
        img: "n6.jpg",
    },
    p7 = {
        name: "Product Name",
        category: "category",
        brand: "brand",
        rating: 5,
        price: 80,
        img: "n7.jpg",
    },
    p8 = {
        name: "Product Name",
        category: "category",
        brand: "brand",
        rating: 4,
        price: 54,
        img: "n8.jpg",
    },
]


const productTemplate = document.querySelector("#product-template")
const productFragment = document.createDocumentFragment()

const productList1 = document.querySelector("#products1 #products-container")
productList1.appendChild(appendProducts(products1))

const productList2 = document.querySelector("#products2 #products-container")
productList2.appendChild(appendProducts(products2))

function appendProducts(array) {
    array.forEach(product => {
        const clone = productTemplate.content.firstElementChild.cloneNode(true)
    
        clone.querySelector("#img").src = "img/products/"+product.img
        clone.querySelector("span").textContent = product.brand
        clone.querySelector("#name").innerHTML = product.name +"<p> · "+product.category+"</p>"
        clone.querySelector(".rating").innerHTML = "<i class='fas fa-star'></i>".repeat(product.rating)
        clone.querySelector("h4").textContent += product.price
        
        productFragment.appendChild(clone)
    })
    return productFragment
}


const len = window.innerWidth/3
const leftArrow = document.querySelectorAll(".arrow.a-left")
const rightArrow = document.querySelectorAll(".arrow.a-right")
const productList = document.querySelectorAll("#products-container")
productList.forEach((value, key) => {
    leftArrow[key].addEventListener("click", function(){scrollCarrousel(key,-len)})
    rightArrow[key].addEventListener("click", function(){scrollCarrousel(key,len)})
})
    
function scrollCarrousel(i, x) {
    productList[i].scrollBy({
        top: 0,
        left: x,
        scrbehaviour: 'smooth'
    })
}
