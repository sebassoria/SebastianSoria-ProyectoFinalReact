import { useState, createContext, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext=createContext({cartList: [], totalCount:0, totalPrice:0})

 const CartContextProvider = ({children})=>{
    const [cartList, setCartList] = useState([])
    const [totalCount, setTotalCount]=useState(0)
    const [totalPrice, setTotalPrice]=useState(0)

    useEffect(() => {
        const totalCnt = getQuantity()
        setTotalCount(totalCnt)
    }, [cartList])

    useEffect(() => {
        const total = getTotalPrice()
        setTotalPrice(total)
    }, [cartList])

    const addToCart = (productToAdd) => {  
        if(!isInCart(productToAdd.id)) {
            setCartList([...cartList, productToAdd])
            const notifyAdded = () => {
                toast.success('Producto agregado al carrito!', {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            };
            notifyAdded()
        } else {
            const notifyNoAdded = () => {
                toast.error(`Ya se encontraba en su carrito, intente con otro producto!`, {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            };
            notifyNoAdded()
        }  
    }
    const isInCart = (id) => {
        return cartList.some(prod => prod.id === id)
    }

    const removeList = () => {	
        setCartList([]) 
    }

    const deleteItem = (id) => {	
        const cartWithoutProduct = cartList.filter(prod => prod.id !== id)
        setCartList(cartWithoutProduct)
    }

    const getQuantity = () => {
        let accu = 0

        cartList.forEach(prod => {
            accu += prod.count
        })

        return accu
    }
     const getTotalPrice=()=>{

        let accu=0
        cartList.forEach(prod => {
            accu += prod.price*prod.count
        })

        return accu
     }
  
    
    return(
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem, totalCount, totalPrice}}>
            {children}
            <ToastContainer />
        </CartContext.Provider>
       
    )
 }
 export default CartContextProvider