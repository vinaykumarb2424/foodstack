import React,{Component} from 'react';
import axios from 'axios';



const rendercosturl="https://api-foodstack.herokuapp.com/cost"
const url="https://api-foodstack.herokuapp.com/restaurant?mealtype="
class CostFilter extends Component{
   constructor(){
      super()


      this.state={
         cost:'',
         
      }
  }
  renderCost = (data) => {
   if(data){
       return data.map((item) => {
           return(
            <div className="form-check">
            <label className="form-check-label font-weight-bold text-secondary">
              <input type="radio" value={item.cost} name="cost" className="form-check-input"></input>
              {item.cost}</label>
           </div>
           )
       })
   }
}
filterCost = (event) => {
   let mealId=sessionStorage.getItem('mealId')
   let cost = event.target.value.split('-');
   let lcost=cost[0];
   let hcost=cost[1];
   let costUrl;
   if(cost==''){
       costUrl=`${url}${mealId}`
   }else{
    costUrl=`${url}${mealId}&lcost=${lcost}&hcost=${hcost}`
   }
   axios.get(costUrl)
       .then((response) => {this.props.restaurantByCost(response.data)})

}
   render(){
      return(
         <div className="container">
                      <div className="pl-3 mt-1" onChange={this.filterCost}>
                          <h5 className="text-black">Cost</h5>
                         {this.renderCost(this.state.cost)}
                   
                   </div>
            </div>
      )
   }
   componentDidMount(){
      fetch(rendercosturl,{method:'GET'})
      .then((res) => res.json())
      .then((data) => this.setState({cost:data}))
  }
}


export default CostFilter;