export let cart=JSON.parse(localStorage.getItem('cart'))
if(!cart){
  cart=[{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2,
    deliveryOptionId:'1',
  },{
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:1,
    deliveryOptionId:'2',
  }]
}


function addToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart))
}
export function addToCart(productId){
    let matchingItems
    cart.forEach((item)=>{
      if(productId===item.productId){
        matchingItems=item
      }
    });
    if(matchingItems){
        matchingItems.quantity+=1
    }else{
      cart.push({
        productId:productId,
        quantity:1,
        deliveryOptionId:'1'
      })
    }
    addToStorage()
  }

  export function removeCart(productId){
   const newCart=[]
    cart.forEach((Item)=>{
      if(Item.productId !== productId){
        newCart.push(Item);
      }
    })
    cart=newCart
    addToStorage()
  }
 export function updatedelivery(deliveryOptionId,productId){
  let matchingItems
  cart.forEach((item)=>{
    if(productId===item.productId){
      matchingItems=item
    };
    })
    matchingItems.deliveryOptionId=deliveryOptionId
    addToStorage()
  }
    
 
  