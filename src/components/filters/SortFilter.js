import React,{Component} from 'react';
import axios from 'axios';

const url="https://api-foodstack.herokuapp.com/restaurant?mealtype="

class SortFilter extends Component{
    sortFilter = (event) => {
        let mealId=sessionStorage.getItem('mealId')
        let sort = event.target.value
        const costUrl=`${url}${mealId}&sort=${sort}`
        axios.get(costUrl)
            .then((response) => {this.props.restaurantBySort(response.data)})

    }
    render(){
        return(
            <div onChange={this.sortFilter} className="container">
                <div className="pl-3 mt-1" onChange={this.filterCuisine}>
                          <h5 className="text-black">Sort</h5>
                         
                          <div className="form-check">
                           <label className="form-check-label font-weight-bold text-secondary">
                            <input type="radio" value="1" name="cuisine" className="form-check-input"></input>
                         Low-High</label>
                        </div>
                        <div className="form-check">
                           <label className="form-check-label font-weight-bold text-secondary">
                            <input type="radio" value="-1" name="cuisine" className="form-check-input"></input>
                            High-Low</label>
                        </div>
                   
                   </div>                    
                   
           </div>
        )
    }
}

export default SortFilter