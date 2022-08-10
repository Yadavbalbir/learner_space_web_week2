import {createContext, useContext, useState} from 'react'

const InventoryCartContext = createContext({})

export function useInventoryCart() {
  return (
    useContext(InventoryCartContext)
  )
}


export function InventoryCartProvider({children}){

    const [cartItems, setCartItems] = useState([]);

    function getCartQuantity(){
        return cartItems.length;
    }

    function getItemQuantity(id){
        return cartItems.find(item => item.id===id)?.quantity || 0
    }

    function increaseItemQuantity(id){
        setCartItems(currItems =>{
            if(currItems.find(item => item.id === id)==null){
                return [...currItems, {id, quantity:1}]
            }else{
                return currItems.map(item => {
                    if(item.id ===id){
                        return {...item, quantity:item.quantity+1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function decreaseItemQuantity(id){
        setCartItems(currItems =>{
            if(currItems.find(item => item.id === id)?.quantity===1){
                return currItems.filter(item => item.id !==id)
            }else{
                return currItems.map(item => {
                    if(item.id ===id){
                        return {...item, quantity:item.quantity-1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id){
        setCartItems(currItems=>{
            return currItems.filter(item => item.id !==id)
        })
    }

    return (
        <InventoryCartContext.Provider value = {{cartItems,getCartQuantity, getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart}}>
            {children}
        </InventoryCartContext.Provider>
    )
}