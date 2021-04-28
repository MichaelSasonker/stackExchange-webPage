import React, { useEffect, useState } from 'react';
import './Favourites.css';
// import  { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function SaveF() {
    const [favourites, setFavourites] = useState([]);
    const addTofavourites = (item) => {
        // let isExists = false;
        // favourites.find((favorite) => {
        //   if (favorite.id === saved.id) {
        //     isExists = true;
        //     alert(“already saved”);
        //   }
        // });
        // if (!isExists) {
          setFavourites([...favourites, item]);
          alert(`Saved to list`);
          console.log(favourites);
        // }
      };
      const deleteFromfavourites = (item) => {
        setFavourites(
          favourites.filter((favourite) => favourite.id !== item.id)
        );
        return(
          <div className='SAVED_CONTAINER'>
              <div className='FAVOURITES'>
                

                  onClick={deleteFromfavourites}
                  {/* buttonText=DELETE' */}
              </div>
          </div>
          )
      };
      
}


  
