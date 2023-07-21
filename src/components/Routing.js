import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home/Home';
import Listing from './listing/Listing';
import RestDetails from './details/RestDetails';
import "./app.css";
const Routing = () => {
  return (
    <div className='container'>
        <BrowserRouter>
            <Route exact path="/" component={Home}></Route>
            <Route path="/listing/:mealId" component={Listing}></Route>
            <Route path="/details" component={RestDetails}></Route>
        </BrowserRouter>
    </div>
  )
}

export default Routing;