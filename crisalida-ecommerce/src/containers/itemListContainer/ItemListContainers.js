import React from 'react';
import '../../containers/itemListContainer/itemListContainerStyle.css'

export default function ItemListContainers({greeting}) {
    return (
        <div className="container-list">
            <h2 className="container-list__text"> Holaa, este es un saludo para todos los {greeting}</h2>
        </div>
    )
}
