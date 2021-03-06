import React,{Component} from 'react';
import axios from 'axios';
import Listing from './Listing';
import Header from '../Header';   
import Signup from '../Signup';      
import Footer from '../Footer';
import CuisineFilter from '../filters/CuisineFilter';
import CostFilter from '../filters/CostFilter';
import SortFilter from '../filters/SortFilter';

const url = "https://api-foodstack.herokuapp.com/restaurant?mealtype=";

class ListingApi extends Component{  

 
    constructor(){
        super()

        this.state={
            restaurantList:'' 
        }
        
    }
    setDataPerFilter=(sortedData)=>{
        this.setState({restaurantList:sortedData})
      }

    render(){
        return(
            <div className="page-container">
                   <div className="content-wrap">
                      <Header />
                      <div className="body pt-0">
                        <div className="container mt-5">
                          <div className="row  d-md-block">
                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mt-5  float-left" style={{height:'650px',width:'25%',backgroundColor:'khaki'}}>
                            <CuisineFilter  restaurantByCuisine={(data) => {this.setDataPerFilter(data)}}/>
                            <CostFilter  restaurantByCost={(data) => {this.setDataPerFilter(data)}}/>
                            <SortFilter restaurantBySort={(data) => {this.setDataPerFilter(data)}}/>

                        </div> 
                       
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 mt-5 bg-warnig  pl-3 float-right">
                        <Listing restaurantList={this.state.restaurantList}/>
                        </div>
                          </div>
                        
                        </div>
                   </div>
               </div>
               <div className="footer">
                  <Footer />
               </div>
          </div>
      
            
            
        )
    }

    componentDidMount(){
        var mealId = this.props.match.params.id
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${url}${mealId}`)
        .then((response) => {this.setState({restaurantList:response.data})})
    }

  
    
}

export default ListingApi;