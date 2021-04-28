import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Items() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  // const [query, setQuery] = useState('https://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide');
  const [userData, setUserData] = useState('');

// useEffect(() => {
//     getItems();
//   }, [query]);

// const getItems = async () => {
//     console.log('a');
//   };

const updateSearch = (e) => {
    setSearch(e.target.value);
  };

//prevent
  const getSearch = (e) => {
    e.preventDefault();
    // setQuery(search);
    setSearch('');
  }

  const createAccount = async () => { 
    console.log(search)
    // const { data } = await axios.post('http://localhost:3001/api/users',{ "url": search } ); 
  const {title} = await axios.post('http://localhost:3001/api/users',{ "url": search } ); 

    setUserData([title]); 
  }; 

return(
    <div className='CONTAINER'>
      {console.log(userData)}
           <form onSubmit={getSearch} className="search-form">
        <input
          className='search-bar'
          placeholder='Type here'
          type='text'
          value={search}
          onChange={updateSearch}
        />
        <button className='search-button' type='Submit' onClick={(e) => createAccount()}>
          Search
        </button>
      </form>
    <div className='ITEMS'>
      {/* <Item title={items.title}
      comemnt={item.comment}
        secondComment={item.secondComment}>
      </Item> */}
        {/* {onClick={deleteFromfavourites}
        buttonText='SAVE'} */}
    </div>
  </div>
  )
}
