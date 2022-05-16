import { Link } from 'react-router-dom';

const Item = ({name, price, stock, img, id}) => {
    return(
        <>
            <div className="card margin">
                <img src={img} className="card-img-top bagImg" alt="bag"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: ${price}</p>
                    <p className="card-text">Stock: {stock} units/s</p>
                    <Link to={`/item/${id}`}><a href="#" className="btn btn-primary">Details</a></Link>
                </div>
            </div>
        </>
    );
}
export default Item;