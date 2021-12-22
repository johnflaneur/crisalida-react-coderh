import React from 'react'
import { useParams } from 'react-router'
import { useCollection } from '../firebase/useCollection'
import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'

export const ItemListContainer = () => {

    const { catId } = useParams()
    const { loading, data: products } = useCollection("products", catId)
   

    return (
        <>
            {
                loading 
                    ? <Loader/>
                    : <ItemList items={products}/>
            }
        </>
    )
}
