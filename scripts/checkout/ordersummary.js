import { cart,removeCart,updatedelivery} from "../../data/cart.js";
import {products,getProducts } from "../../data/products.js";
import { currencyPlay } from "../utils/money.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js"
import { deliveryOptions, getDelivery} from "../../data/deliveryoptions.js";
import { ordersummary, renderpayment } from "./paymentsummary.js";

export function rendercart(){
let productHTML='';
cart.forEach((cartItem)=>{
    const productId=cartItem.productId
    let matchingProducts = getProducts(productId)
   
    
    const deliveryOptionId= cartItem.deliveryOptionId
    let deliveryOption=getDelivery(deliveryOptionId)
    
    const today=dayjs()
    const deliverydate=today.add(deliveryOption.deliveryDays,
      'days'
    )
    const dateString=deliverydate.format('dddd, MMMM D')
   productHTML+=` 
    <div class="cart-item-container 
    js-cart-item-container-${matchingProducts.id}">
            <div class="delivery-date">
              Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProducts.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProducts.name}
                </div>
                <div class="product-price">
                 ${matchingProducts.getPrice()}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-btn "
                  data-product-id="${matchingProducts.id}">
                    Delete 
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
               ${deliveryHTML(matchingProducts,cartItem)}
              </div>
            </div>
          </div>
           `
  
  });

  function deliveryHTML(matchingProducts,cartItem){
    let html=''
    deliveryOptions.forEach((deliveryOption)=>{
      const today=dayjs()
      const deliverydate=today.add(deliveryOption.deliveryDays,
        'days'
      )
      const dateString=deliverydate.format('dddd, MMMM D')
      const pricestring=deliveryOption.priceCents
      ===0
      ?'FREE'
      :`$${currencyPlay(deliveryOption.priceCents)}-`
      const isChecked= deliveryOption.id===cartItem.deliveryOptionId
     html+=`
      <div class="delivery-option js-delivery-option"
        data-product-id="${matchingProducts.id}"
         data-delivery-id="${deliveryOption.id}">
       <input type="radio"
       ${isChecked? 'checked' : ''}
         class="delivery-option-input"
         name="${matchingProducts.id}">
          <div>
         <div class="delivery-option-date">
             ${dateString}
           </div>
          <div class="delivery-option-price">
         ${pricestring} Shipping
          </div>
          </div>
          </div>
     `
    })
    return html
  }
document.querySelector('.js-grid').innerHTML=productHTML
//console.log(productHTML)

document.querySelectorAll('.js-delete-btn')
.forEach((link)=>{
  link.addEventListener('click',()=>{
    const productId=link.dataset.productId
   removeCart(productId)
   const container=document.querySelector(`.js-cart-item-container-${productId}`)
   container.remove()
   renderpayment()
   //ordersummary()
   //checkOut()
})
})

document.querySelectorAll('.js-delivery-option')
.forEach((element)=>{
    element.addEventListener('click',()=>{
      const {productId,deliveryOptionId}=element.dataset
      updatedelivery(productId,deliveryOptionId)
      rendercart()
      renderpayment()
      //ordersummary()
      //checkOut()
    })
})
}

let checkoutCount=0

export function checkOut(){
  cart.forEach((cartItem)=>{
  checkoutCount+=cartItem.quantity
  document.querySelector('.js-checkout-quantity')
  .innerHTML= `<div class="checkout-header-middle-section js-checkout-quantity">
  Checkout (<a class="return-to-home-link"
    href="amazon.html">${checkoutCount}</a>)
</div>`
})
}


