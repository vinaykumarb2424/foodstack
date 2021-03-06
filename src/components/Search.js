import React from 'react';
import { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './Search.css';

const url="https://api-foodstack.herokuapp.com/city";
const restaurantUrl = "https://api-foodstack.herokuapp.com/restaurant?city="



class Search extends Component{

    constructor(){
        super()


        this.state={
            city:'',
            restaurant:''
        }
    }
    
    renderCity =(data) =>{
        if(data){
            return data.map((city) =>{
                return(
                    <option value={city._id}>{city.city_name}</option>
                )
            })
            
        }
    }

    renderRestaurant = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>{item.name}</option>
                )
            })
        }
    }

    handleCity=(event)=>{
        console.log(event.target.value)
        const cityId = event.target.value;
        fetch(`${restaurantUrl}${cityId}`,{method:'GET'})
        .then((res)=> res.json())
        .then((data) => {
            this.setState({restaurant:data})
        })
    }
    handleRestaurant=(event)=>{
        this.props.history.push(`/details/${event.target.value}`)
       
        
    }



    render(){
        return(
            <div className="mt-5   ImageBg">
                  <div className="tex t-center pt-5">
                
                  </div>
                  <div className="text-center pt-5">
                
                  </div>
                  <div className="text-center pt-5">

                  </div>
                  <div className="text-center pt-5">
                         <h2 className="text-white pt-5">Find Bést Restaurants, Cafés, and bars</h2>
                  </div>
                  <div className="container">
                      <div className="form-group">
                        <div className="row">

                         <div className="col-lg-4">
                        
                         </div>
                         <div className="col-lg-4 ">
                             <div className="row">

                             
                             <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-6">
                               <select className="form-control" onChange={this.handleCity}>
                                  <option>Select city</option>
                                  {this.renderCity(this.state.city)}
                               </select>
                   
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-6 col-sm-6 col-6">
                   
                               <select className="form-control" onChange={this.handleRestaurant}>
                               <option>Select restaurant</option>
                                 {this.renderRestaurant(this.state.restaurant)}
                              </select>
                        </div> 
                        </div>
                         </div>
                   
                         
                        
                    
                </div>
               
            </div>
            </div>
           
           </div>
        
        )
    }
    
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => this.setState({city:data}))
    }

}
export default withRouter(Search);