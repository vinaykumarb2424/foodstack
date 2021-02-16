import React,{Component} from 'react';
import QuickSearch from '../QuickSearch';
import Header from '../Header';
import Footer from '../Footer';
import CurrencyConverter from '../Currencyconverter/CurrencyConveter';
import Signup from '../Signup';

const url = "https://api.exchangeratesapi.io/latest?base=";



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
    

    // componentDidMount(){
    //     fetch(url,{method:'GET'})
    //     .then((res) => res.json())
    //     .then((data) => {
    //         this.setState({currency:data})
    //     })
    // }
    
}

export default CurrencyConverterApi;