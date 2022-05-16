import ItemList from './ItemList.jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { firestoreFetch } from '../utils/firestoreFetch.js';

const ItemListContainer = () => {
    const [ data, setData ] = useState([])
    const { typeProduct } = useParams();

    //componentDidUpdate
    useEffect(() => {
        firestoreFetch(typeProduct)
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, [typeProduct]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setData([]);
        })
    }, []);

    return(
        <>
            <div className='d-flex justify-content-between'>
                <ItemList items={data}/>
            </div>
        </>
    );
}

export default ItemListContainer;