import Item from './Item.jsx'
import HourglassBottomTwoToneIcon from '@mui/icons-material/HourglassBottomTwoTone';

const ItemList = ({items}) => {
    return(
        <>
        <div className='gridContainer'>
            <div className='row'>
            {
                items.length > 0
                ? items.map(bag => <Item classname='col-md-12' key={bag.id} id={bag.id} price={bag.price} name={bag.name} stock={bag.stock} img={bag.photo}/>)
                : <div><HourglassBottomTwoToneIcon/></div>
            }
            </div>
        </div>
        </>
        
    );
}

export default ItemList;