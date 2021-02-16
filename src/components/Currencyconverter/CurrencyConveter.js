
import React from "react";
import { Component } from "react";

const url = "https://api.exchangeratesapi.io/latest?base=";


class CurrencyConverter extends Component{

    constructor(){
        super()

        this.state={
            currencyRate:'',
            amount:'',
            fromCurrency:'',
            toCurrency:'',
            result:''
            
        }
    }


    renderCurrency =(data) =>{
        if(data){
            return Object.keys(data.rates).map((item) =>{
                return(
                    <option value={item}>{item}</option>
                )
            })
            
        }
    }
    

    
    handleAmount =(event) =>{
        this.setState({amount:event.target.value})
        
      
    }
    handleFromCurrency =(event) =>{
       
        this.setState({fromCurrency:event.target.value})
        
      
    }
     
    handleToCurrency =(event) =>{
        
        this.setState({toCurrency:event.target.value})
         
    }
    handleConvert =(event) =>{
       
        const fromCurrency = this.state.fromCurrency;
        const ToCurrency = this.state.toCurrency;
        const amount = this.state.amount;

        fetch(`${url}${fromCurrency}`,{method:'GET'})
        .then((res)=> res.json())
        .then((data) => {
            var finalamount = data.rates[ToCurrency];
            finalamount = finalamount * Number(amount);
            var convertedAmount =Number(finalamount).toFixed(4);
     this.setState({result:convertedAmount});
           
        })
    
         
    }


    render(){
        return(
            <div className="container mt-5 pt-5">
            <div className="container-fluid">
            <div className="card">
              <div className="card-header text-center bg-secondary text-white">Currency Converter</div>
                   <div className="card-body">
                   <div className=" row" >
                     <div className="col-xl-6">                        
                         <div className="form-group">
                              
                              <label for="FromCurrency">From</label>
                             <select name="select" id="ddlFrom" class="form-control" onChange={this.handleFromCurrency} >
                             <option value="">Please select</option>
                             {this.renderCurrency(this.state.currencyRate)} 
                             </select>
                         </div>
                         </div>
                         <div className="col-xl-6">
                         <div className="form-group">
                         <label for="Amount">Amount</label>
                              <input className="form-control" onChange={this.handleAmount}></input>
                         </div>
                         </div>

                     </div>
                     <div className=" row" >
                     <div className="col-xl-6">
                         
                         <div className="form-group">
                             
                              <label for="ToCurrency">To</label>
                             <select name="select" id="ddlTo" class="form-control" onChange={this.handleToCurrency}>
                             <option value="">Please select</option>
                             {this.renderCurrency(this.state.currencyRate)} 
                             </select>
                         </div>
                         </div>
                         <div className="col-xl-6">
                         <div className="form-group">
                              <label for="Amount">Converted Amount</label>
                              <input className="form-control" value={this.state.result}  readOnly></input>
                         </div>
                         </div>

                     </div>
                     
                     <button className="btn btn-info btn-block" onClick={this.handleConvert}>Convert</button>
                     
                     
                   </div>
                 
                     
              </div>
                
     </div>
                        
                    </div>
          
        )
    }
    componentDidMount(){
            fetch(url,{method:'GET'})
            .then((res) => res.json())
            .then((data) => {
                this.setState({currencyRate:data})
            })
    }
}
export default CurrencyConverter;