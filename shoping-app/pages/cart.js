import React from "react";
import { useCart } from "../context/cart-context";
import { Button } from "../components/elements/Button";
import ProductContainer from "../components/cart/ProductContainer";

const Cart  = () => {
  const {state} = useCart();

  if(!state.products || state.products.length == 0){
    return(
      <div className="flex justify-center">
        <p>Your Cart is Empty!</p>
      </div>
    )
  }



  return(
    <div>
      {
        state.products.map((product , index) => {
          return(
            <ProductContainer key={index} product={product} />

          )
        })
      }
      <div className="flex md:max-w-screen-lg mx-auto justify-end">
            <Button variant="dark">Check Out</Button>
          </div>
    </div>
  )
}

export default Cart;