import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import { useState,useContext } from 'react';
import { CartContext } from './CartContext';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import HourglassBottomTwoToneIcon from '@mui/icons-material/HourglassBottomTwoTone';


const ItemDetail = ({item}) => {
    const [ itemCount, setItemCount ] = useState(0)
    
    const test = useContext(CartContext);
    
    const onAdd = (qty) => {
        alert(qty + " items have been selected");
        setItemCount(qty)
        test.addToCart(item, qty); 
    }
    return(
        <>
            {
                item
                ?
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={item.img}
                        alt="bag"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Price: ${item.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Stock: {item.stock} units in stock
                        </Typography>
                    </CardContent>
                    <CardActions>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart'><Button variant="contained" color="secondary">Go to Cart!</Button></Link>
                    }
                    </CardActions>
                </Card>
                : <div><HourglassBottomTwoToneIcon/></div>
            }
        </>
    );
}

export default ItemDetail;