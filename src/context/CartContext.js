import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity,setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (addProduct) => {
        if (!alreadyInCart(addProduct.id)){
          setCart([...cart,addProduct])
        } else {
          console.log("ya está agregado")
          const cartUpdated = cart.map(prod => {
            if(prod.id === addProduct.id) {
              const productUpdated = {
                ...prod,
                quantity: addProduct.quantity
              }

              return productUpdated
            } else {
              return prod
            }
          })

          setCart(cartUpdated)
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

      useEffect(() => {
        const total = getTotal()
        setTotal(total)
      }, [cart])

      const getTotalQuantity = () =>{
        
        let totalQuantity = 0

        cart.forEach(prod => {
          totalQuantity += prod.quantity
        })

        return totalQuantity
      }


      const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)
  
        return product?.quantity
      }

      const getTotal = () => {
        let accu = 0
  
        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })
  
        return accu
      }

      const clearCart = () => {
        setCart([])
      }

    return (
        <CartContext.Provider value={{cart, totalQuantity, addItem, removeItem, getProductQuantity, clearCart, total, getTotalQuantity }}>
         {children}
        </CartContext.Provider>
    )
}
