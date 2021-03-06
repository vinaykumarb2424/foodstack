import React,{Component} from 'react';
import axios from 'axios';



const rendercuisineurl="https://api-foodstack.herokuapp.com/cuisine"
const url="https://api-foodstack.herokuapp.com/restaurant?mealtype="
class CuisineFilter extends Component{
   constructor(){
      super()


      this.state={
         cuisine:'',
         
      }
  }
  renderCuisine = (data) => {
   if(data){
       return data.map((item) => {
           return(
            <div className="form-check">
            <label className="form-check-label font-weight-bold text-secondary">
              <input type="radio" value={item.cuisine} name="cuisine" className="form-check-input"></input>
              {item.name}</label>
           </div>
           )
       })
   }
}
filterCuisine = (event) => {
   let mealId=sessionStorage.getItem('mealId')
   let cuisineId = event.target.value;
   let cuisineUrl;
   if(cuisineId==''){
       cuisineUrl=`${url}${mealId}`
   }else{
       cuisineUrl=`${url}${mealId}&cuisine=${cuisineId}`
   }
   axios.get(cuisineUrl)
       .then((response) => {this.props.restaurantByCuisine(response.data)})

}
   render(){
      return(
         <div className="container">
                  <div className="display-4 font-weight-normal"><h3 className="text-primary">Filters</h3></div>
                      <div className="pl-3" onChange={this.filterCuisine}>
                          <h5 className="text-black">Cuisine</h5>
                         
                         {this.renderCuisine(this.state.cuisine)}
                   
                   </div>
            </div>
      )
   }
   componentDidMount(){
      fetch(rendercuisineurl,{method:'GET'})
      .then((res) => res.json())
      .then((data) => this.setState({cuisine:data}))
  }
}


export default CuisineFilter;