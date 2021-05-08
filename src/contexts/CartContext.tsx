/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { createContext, useState, ReactNode, useContext } from 'react'

type Cart = {
  price: string
  quantity: number
}

type CartContextData = {
  CartList: Cart[]
  adicionar: (Cart: Cart) => void
  playList: (list: Cart[], index?: number) => void
  clearPlayerState: () => void
}

export const CartContext = createContext({} as CartContextData)

type CartContextProviderProps = {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [CartList, setCartList] = useState([])

  function adicionar(Cart: Cart) {
    setCartList([Cart])
  }

  function playList(list: Cart[], index?: number) {
    setCartList(list)
  }
  function clearPlayerState() {
    setCartList([])
  }
  return (
    <CartContext.Provider
      value={{ CartList, adicionar, playList, clearPlayerState }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
