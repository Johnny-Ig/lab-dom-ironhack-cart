// ITERATION 1 


function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  let quantity = product.querySelector(".quantity input")
  console.log(price.innerText)
  console.log(quantity.innerText)
  let subtotal = (price.innerText) * ((quantity).value)
  let total = product.querySelector(".subtotal span")
    total.innerText = subtotal
    console.log(subtotal)
    return subtotal
} 

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const twoProducts = document.querySelectorAll(".product");
  let allPrice = 0; 
   twoProducts.forEach((someProducts) => {
    let subtotal= updateSubtotal(someProducts)
    allPrice+= subtotal
    
  })
   
  // ITERATION 3
  //... your code goes here
  let totalPrice= document.querySelector("#total-value span");
  totalPrice.innerHTML = allPrice

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
