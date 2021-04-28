import React, { useEffect, useState } from 'react';

export default function Items() {
    const [items, setitems] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('https://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide');

useEffect(() => {
    getItems();
  }, [query]);
 
const getItems = async () => {
  };

const updateSearch = (e) => {
    setSearch(e.target.value);
  };
//prevent
const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  
return(
    <div className='CONTAINER'>
           <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          placeholder="Type"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="Submit">
          Search
        </button>
      </form>
    <div className='ITEMS'>
      <Item title={items.title}
      comemnt={item.comment}>


      </Item>
        onClick={deleteFromfavourites} 
         buttonText='SAVE' 
    </div>
</div>
  )
 }
}


