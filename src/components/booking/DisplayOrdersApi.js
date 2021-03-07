import React,{Component} from 'react';
import axios from 'axios';
import ViewOrders from './ViewOrders';

const url = "https://api-foodstack.herokuapp.com/orders"

class DisplayOrdersApi extends Component{
    constructor(){
        super()

        this.state={
            orders:''
        }
       
    }

    render(){
        return(
            <div>
                <ViewOrders orders={this.state.orders}/>
            </div>
        )
    }

    componentDidMount(){
        axios.get(url).then((result) => {this.setState({orders:result.data})})
    }
}


export default DisplayOrdersApi;