import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Search from './Components/Search/Search';
import Favourites from './Components/Favourites/SaveF';
import Items from './Components/Items/Items';
// import './Components/Style/Style.css';


export default function App() {
  return (
        <div>
         <Router>
         <Navbar/>
         <Switch>
           <Route path='/' exact component=
           {Home}/>
           <Route path='/Items' 
           component=
           {Items} />
          <Route path='/Favorities' component=
           {Favourites} />
         </Switch>
         </Router>     
    </div>
  )
}