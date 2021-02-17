import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import Signup from './components/Signup';
import Listing from './components/listing/ListingApi';
import HotelDetails from './components/details/HotelDetails';
import CurrencyConverter from './components/Currencyconverter/CurrencyConverterApi';
import CurrencyConverterApi from './components/Currencyconverter/CurrencyConverterApi';



const Routers = () => {
    return(
        <BrowserRouter>
        
            
            <Route exact path="/" component={Home}/>
            <Route  path="/home" component={Home}/>
            <Route  path="/listing/:id" component={Listing}/>
            <Route path="/details/:id" component={HotelDetails}/>
           
            <Route   path="/currency-converter" component={CurrencyConverterApi}/> 
        </BrowserRouter>
    )
}

export default Routers