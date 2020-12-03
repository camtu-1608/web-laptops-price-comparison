import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import React from 'react';
import BrandIcons from './components/BrandIcons'
import 'bootstrap/dist/css/bootstrap.min.css';
import Trending from './components/Trending';
import Products from './components/Products';




import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



const App = () => {
    return (
      <div class='page'>
        <div class='background'>
          <NavBar/>
          <div class='search-title'>
              <div class= 'title'>
                The Laptops App
              </div>
              <div class= 'subtitle'>
                Search Laptops and Compare Prices
              </div>
          </div>
          <SearchBar />
          <BrandIcons/>
        </div>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL+'/'} component={Trending}/>
          <Route path={process.env.PUBLIC_URL +'/search/:key'} component={Products}/>
        </Switch>
      </div>
    );
}


export default App;
