const products = [
    {
      product: "chaise",
      price: 120.50
    },
    {
      product: "table",
      price: 1200.99
    },
    {
      product: "vase",
      price: 420.01
    },
    {
      product: "canape",
      price: 12585.55
    }
]

function getPromoPrice(price, percent) {
    return price - (price * percent / 100)
}

function roundDecimal(number){
    const tmp = Math.pow(10, 2)
    return Math.round( number*tmp )/tmp
}

function formatPrice(price) {
    return price.toString().replace(".", ",") + " €"
}

for (let i = 0; i < products.length; i++) {
  let product = document.getElementById(products[i].product) 
  
  let newPromoPrice = getPromoPrice(products[i].price, 25)
  let roundedPrice = roundDecimal(newPromoPrice)
  
  product.innerText = formatPrice(roundedPrice)
}