import React,{Component} from 'react';
import axios from 'axios';
import Listing from './Listing';

const url = "https://api-foodstack.herokuapp.com/restaurant?mealtype=";

class ListingApi extends Component{

    constructor(){
        super()

        this.state={
            restaurantList:''
        }
    }

    render(){
        return(
            
            <Listing restaurantList={this.state.restaurantList}/>
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