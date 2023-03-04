const features = [
    f1 = {
        name: "Free Shipping",
        img: "f1.png",
    },
    f2 = {
        name: "Online Order",
        img: "f2.png",
    },
    f3 = {
        name: "Save Money",
        img: "f3.png",
    },
    f4 = {
        name: "Promotions",
        img: "f4.png",
    },
    f5 = {
        name: "Happy Sell",
        img: "f5.png",
    },
    f6 = {
        name: "24/7 Support",
        img: "f6.png",
    },
]

const featureList = document.querySelector("#feature")
const featureTemplate = document.querySelector("#feature-template")
const featureFragment = document.createDocumentFragment()

features.forEach(feature => {
    const clone = featureTemplate.content.firstElementChild.cloneNode(true)

    clone.querySelector("#img").src = "img/features/"+feature.img
    clone.querySelector("#name").textContent = feature.name
    
    featureFragment.appendChild(clone)
})

featureList.appendChild(featureFragment)