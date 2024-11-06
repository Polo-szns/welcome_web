import { cart } from "../../data/cart.js"
import { getProducts } from "../../data/products.js"
import { deliveryOptions, getDelivery } from "../../data/deliveryoptions.js"
import { currencyPlay } from "../utils/money.js"

let itemCount=0

export function ordersummary(){
  cart.forEach((cartItem)=>{
  itemCount+=cartItem.quantity
  document.querySelector('.js-finish-line')
  .innerHTML=`<div class="js-finish-line">Items (${itemCount}):</div>`
})
}
export function renderpayment(){
    let productPriceCents=0
    let deliveryPriceCents=0
  cart.forEach((cartItem)=>{
    const product=getProducts(cartItem.productId)
    productPriceCents+=product.priceCents*cartItem.quantity
    const deliveryOptions=getDelivery(cartItem.deliveryOptionId)
    deliveryPriceCents=deliveryOptions.priceCents
})
  const  totalTaxBefore=productPriceCents + deliveryPriceCents
  const tax = totalTaxBefore*0.1
  const totalOrder=totalTaxBefore+tax

 const renderpaymentHtml=`
           <div class="payment-summary-title ">
            Order Summary
          </div>

          <div class="payment-summary-row ">
             <div class="js-finish-line">Items (${itemCount}):</div>
            <div class="payment-summary-money">$${currencyPlay(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${currencyPlay(deliveryPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${currencyPlay(totalTaxBefore)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${currencyPlay(tax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${currencyPlay(totalOrder)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
  `
  document.querySelector('.js-review-order')
  .innerHTML=renderpaymentHtml
}

