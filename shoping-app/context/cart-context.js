
import React from "react";
import { useState } from "react";

const CartContext = React.createContext();

function cartReducer(state , action) {
  switch (action.type){
    case 'add' : 
    {
      let index = state.products.findIndex((product) => product.id === action.id);
      if (index > -1){
        let product = state.products[index];
        let newQuantity = product.qt + action.quantity;
        let updateProduct = {...product , qt: newQuantity }
        return {products: [...state.products.slice(0 , index  ) , ...state.products.slice(index + 1) , updateProduct]}
      }else{

        return {products : [...state.products , action.product]}
      }
    }
    case 'remove':
      {
        return {products : state.products.filter((product) => product.id != action.id)}
      }
    case 'updateAmount':
      {
        let index = state.products.findIndex((product) => product.id === action.id);
        let product = state.products[index];
        let updateProduct = {...product , qt: action.quantity}
        return {products: [...state.products.slice(0 , index  ) , ...state.products.slice(index + 1) , updateProduct]}
      }
    default : {
      throw new Error(`unhandled action type: ${action.type}`)
    }
  }
}

function CartProvider({children}) {
  const [state , dispatch] = React.useReducer(cartReducer , {products : []})
  const value = {state , dispatch}
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

function useCart () {
  const context = React.useContext(CartContext)
  if(context === undefined){
    throw new Error('useCart Must Be Used Within a CartProvider')

  }
  return context
}

export {useCart ,  CartProvider}