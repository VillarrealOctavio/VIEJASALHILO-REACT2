import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useEffect,useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [ quantity, setQuantity ] = useState(0)

    useEffect(()=>{
        setQuantity(initial)
    },[])

    const increment = () =>{
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if(quantity > initial + 1){
            setQuantity(quantity - 1)
        }
    }
    return(
        <>
            <Stack spacing={2} direction="row">
                <Button onClick={decrement} variant="text">-</Button>
                <div>{quantity}</div>
                <Button onClick={increment} variant="text">+</Button>
                {
                stock && quantity
                ? <Button variant="contained" color="primary" onClick={() => onAdd(quantity)}>Add to purchase</Button>
                : <Button variant="contained" disabled>Add to purchase</Button>
                }
            </Stack>
        </>
    );
}

export default ItemCount;