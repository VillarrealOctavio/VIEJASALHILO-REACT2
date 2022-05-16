import { CartContext } from "./CartContext";
import { useContext, useEffect} from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import db from "../utils/firebaseConfig";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";

const Cart = () => {
    const test = useContext(CartContext); 
    const finishOrder = () => {
        const DBItems = test.cartList.map(item => ({
          id: item.idItem,
          title: item.nameItem,
          price: item.priceItem
        }));
    
        test.cartList.forEach(async (item) => {
          const itemRef = doc(db, "products", item.idItem);
          await updateDoc(itemRef, {
            stock: increment(-item.qtyItem)
          });
        });
    
        let order = {
          buyer: {
            name: "Octavio Villarreal",
            email: "octavillarreal@gmail.com",
            phone: "24681012"
          },
          total: test.calcTotal(),
          items: DBItems,
          date: serverTimestamp()
        };
      
        console.log(order);
        
        const createOrderInFirestore = async () => {
          // Add a new document with a generated id
          const newOrderRef = doc(collection(db, "orders"));
          await setDoc(newOrderRef, order);
          return newOrderRef;
        }
      
        createOrderInFirestore()
          .then(result => alert('Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
          .catch(err => console.log(err));
      
        test.removeList();
      
      }
    
    
    return(
            <div  className="d-flex flex-column align-items-center">
                <div>CARRITO</div>
                <div className="d-flex flex-column align-items-center">
                    <Link to='/'><h3>Go shopping</h3></Link>
                    {
                        (test.cartList.length > 0)
                        ? <button type="filled" onClick={test.removeList}>DELETE ALL PRODUCTS</button>
                        : <h4>What an empty car. Continue shopping!</h4>
                    }
                </div>
                {
                    test.cartList.length > 0 ?
                    test.cartList.map(bag => 
                    <div key={bag.idItem}>
                        <img src={bag.imgItem} className="card-img-top bagImg" alt="bag"/>
                        <div className="card-body">
                            <h5 className="card-title">{bag.nameItem}</h5>
                            <p className="card-text">Viejas al Hilo!</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Price: ${bag.priceItem}</li>
                            <li className="list-group-item">{bag.qtyItem} bag/s</li>
                            <li className="list-group-item">$ {test.calcTotalPerItem(bag.idItem)} p/bag</li>
                            <li className="list-group-item" onClick={()=>test.deleteItem(bag.idItem)}>Delete product</li>
                        </ul>
                    </div>
                    ): 
                    <div></div>
                }
                {
                    test.cartList.length > 0 &&
                    <div className="card text-center">
                        <div className="card-header">
                            Order summary
                        </div>
                        <div className="card-body">
                            <p className="card-text">Subtotal: ${test.calcSubTotal()}</p>
                            <p className="card-text">Taxes: ${test.taxes()}</p>
                            <h5 className="card-title">Total: ${test.calcTotal()}</h5>
                            <a href="#" className="btn btn-primary" onClick={finishOrder}>Finish Purchase</a>
                        </div>
                        <div className="card-footer text-muted">
                            Viejas al Hilo
                        </div>
                    </div>
                }
            </div>
    );
}

export default Cart;