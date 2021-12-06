import React, {useEffect, useState} from 'react';
import '../../containers/itemListContainer/itemListContainerStyle.css';

const ItemListContainers = () =>{
    const [games, setGames] = useState([]);

    useEffect(() =>{
       
            fetch("https://www.moogleapi.com/api/v1/games");
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setGames(data.results);
            })
            .catch()
            return (
                <div>
                    <Itemlist games={games}/>
                </div>
             )
        })

       
}
export default ItemListContainers