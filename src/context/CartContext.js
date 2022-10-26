import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity,setTotalQuantity] = useState(0)
    const addItem = (addProduct) => {
        if (!alreadyInCart(addProduct.id)){
          setCart([...cart,addProduct])
        } else {
          console.log("ya está agregado");
        }
      }
    
      const alreadyInCart = (id) => {
        return cart.some(prod => prod.id === id)
      }
    
      const removeItem = (id) => {
        const updatedCart = cart.filter (prod => prod.id !== {id} )
        setCart (updatedCart)
      }

      useEffect(()=>
      {
        const totalQuantity = getTotalQuantity()
        setTotalQuantity(totalQuantity)
      }, [cart])

      const getTotalQuantity = () =>{
        
        let totalQuantity = 0

        cart.forEach(prod => {
          totalQuantity += prod.quantity
        })

        return totalQuantity
      }

    return (
        <CartContext.Provider value={{cart, totalQuantity, addItem, removeItem}}>
         {children}
        </CartContext.Provider>
    )
}
