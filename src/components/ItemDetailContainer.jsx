import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { firestoreFetchOne } from '../utils/firestoreFetch';

const ItemDetailContainer = () => {
    const [ info, setInfo ] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setInfo(result))
            .catch(err => console.log(err))
    }, []);

    return(
        <>
            <ItemDetail item={info}/>
        </>
    );
}

export default ItemDetailContainer;