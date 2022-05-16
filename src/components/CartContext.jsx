import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [ cartList, setCartList ] = useState([]);

    const addToCart = (item, qty) => {
        let found = cartList.find(bag => bag.idItem === item.id)
        if (found === undefined){
            setCartList([
                ...cartList, 
                {
                    idItem: item.id,
                    imgItem: item.img,
                    nameItem: item.name,
                    priceItem: item.price,
                    qtyItem: qty
                }
            ])
        }else{
            found.qtyItem += qty;
            setCartList([
                ...cartList    
            ])
            };
        }
        
        const removeList = () => {
            setCartList([]);
        };
        
        
        const deleteItem = (id) => {
            let deleteIt = cartList.filter(bag => bag.idItem != id);
            setCartList(deleteIt);
        }

        const calcTotalPerItem = (idItem) => {
            let index = cartList.map(item => item.idItem).indexOf(idItem);
            return cartList[index].priceItem * cartList[index].qtyItem;
        }
        
        const calcSubTotal = () => {
            let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
            return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
        }
        const taxes = () => {
            const taxValue = calcSubTotal() * 0.21;
            return taxValue; 
        }

        const calcTotal = () => {
            return calcSubTotal() + taxes();
        }

        const calcItemsQty = () => {
            let qtys = cartList.map(item => item.qtyItem);
            return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
        }

        return(
            <>
                <CartContext.Provider value={{
                    cartList, 
                    addToCart, 
                    removeList, 
                    deleteItem, 
                    calcTotalPerItem,
                    calcSubTotal,
                    taxes,
                    calcTotal,
                    calcItemsQty
                    }}>
                    {children}
                </CartContext.Provider>
            </>
        );
}

export default CartContextProvider;



