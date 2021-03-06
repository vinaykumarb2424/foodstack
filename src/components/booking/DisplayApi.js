import React,{Component} from 'react';
import axios from 'axios';
import ViewOrders from './ViewOrders';

const url = "https://eduintern.herokuapp.com/orders"

class DisplayApi extends Component{
    constructor(){
        super()

        this.state={
            booking:''
        }
    }

    render(){
        return(
            <div>
                <ViewOrders bookdata={this.state.booking}/>
            </div>
        )
    }

    componentDidMount(){
        axios.get(url).then((res) => {this.setState({booking:res.data})})
    }
}


export default DisplayApi;