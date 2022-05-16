import ShoppingCartIcon from '@mui/icons-material/ShoppingCartTwoTone';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const test = useContext(CartContext);
    return(
        <>
            <Badge badgeContent={test.calcItemsQty()} color="primary">
                <ShoppingCartIcon/>
            </Badge>
        </>
    );
}

export default CartWidget;