import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import CurrencyConverter from '../Currencyconverter/CurrencyConveter';
import Signup from '../Signup';


    const CurrencyConverterApi = (props) =>{
    
        return(
            <div className="page-container">
               <div className="content-wrap">
                   <Header />
                   <div className="body pt-0">
                    <CurrencyConverter />
                    <Signup />
                   </div>
               </div>
               <div className="footer">
                  <Footer />
               </div>
          </div>
           
        )
    

}

export default CurrencyConverterApi;