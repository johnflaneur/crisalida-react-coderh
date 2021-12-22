import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { CartView } from '../components/CartView/CartView'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'

export const AppRouter = () => {

    const routes = useRoutes([
        {path: "/", element: <ItemListContainer/>},
        {path: "/products/:cartId", element: <ItemListContainer/>},
        {path: "/detail/:itemId", element: <ItemDetailContainer/>},
        {path: "/cart", element: <CartView/>},
        {path: "*", element: <Navigate to="/"/>}
    ])

    return routes
}
