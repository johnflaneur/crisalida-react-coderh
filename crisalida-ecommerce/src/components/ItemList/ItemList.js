import React from 'react';
import Item from '../Item/Item';

const ItemList =  ({games,}) =>{
    return(
        <div>
        {games.map( ffGames => {
            return <Item games={ffGames}/>
        })}
        </div>
    )
}

export default ItemList
