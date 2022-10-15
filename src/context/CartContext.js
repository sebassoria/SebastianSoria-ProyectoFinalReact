import { useState, createContext, useEffect } from "react";

export const CartContext=createContext({cartList: [], totalCount:0})

 const CartContextProvider = ({children})=>{
    const [cartList, setCartList] = useState([])
    const [totalCount, setTotalCount]=useState(0)

    useEffect(() => {
        const total = getQuantity()
        setTotalCount(total)
    }, [cartList])

    const addToCart = (productToAdd) => {  
        if(!isInCart(productToAdd.id)) {
            setCartList([...cartList, productToAdd])
        } else {
        console.log('is in the cart')
        }  
        //implementa la funcionalidad para agregar un producto al carrito
    }
    const isInCart = (id) => {
        return cartList.some(prod => prod.id === id)
    }

    const removeList = () => {	
        setCartList([])
        console.log('Carrito vaciado')
        //implementa la funcionalidad para dejar el carrito vacío
    }

    const deleteItem = (id) => {	
        const cartWithoutProduct = cartList.filter(prod => prod.id !== id)
        setCartList(cartWithoutProduct)
        //implementa la funcionalidad para borrar un producto del carrito
    }

    const getQuantity = () => {
        let accu = 0

        cartList.forEach(prod => {
            accu += prod.count
        })

        return accu
    }

    console.log(cartList)
    return(
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem, totalCount}}>
            {children}
        </CartContext.Provider>
       
    )
 }
 export default CartContextProvider