import { Component } from "react"
import {Link} from 'react-router-dom'
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Signup from '../Signup';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios'
const url="https://api-foodstack.herokuapp.com/restaurant";
class HotelDetails extends Component {
    constructor (){
        super()

        this.state={
            details:''
        }
    }

    render(){
        let {details} = this.state;
        return(
            <div className="page-container">
               <div className="content-wrap">
                   <Header />
                   <div className="body pt-5">
                    
                    <Signup />
                    <div className="container mt-5">
                      <div className="container-fluid">
                   <div className="card mt-5" >
                   <div className="card-header text-right text-capitalize text-white" style={{backgroundColor:'coral'}}>{details.name}</div>
                      <div className="card-block" >
                          <img className="card-img-top"  style={{height:'350px',width:'100%'}} src={details.thumb} alt={details.thumb}></img>
                      </div>
                      <div className="card-body">
                         <h4>{details.name}</h4>
                         <span>{details.locality} {details.city_name}</span>
                         <Tabs>
                         <TabList>
                                <Tab >OverView</Tab>
                                <Tab>Contact</Tab>
                                <Tab>Order Online</Tab>
                            </TabList>
                            <TabPanel>
                               
                                <p>{details.name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                            </TabPanel>
                            <TabPanel>
                                <div className="text-primary">
                                    <span>Contact Us</span> <br />
                                    <span>{details.address}</span>
                                <span> Phone: 9655868686</span>
                                </div>
                                
                            </TabPanel>
                         </Tabs>
                         <Link to='/' className='btn btn-danger'> back</Link>;
                        <Link to={`/placeorder/${details.name}`} className='btn btn-success'> proceed order</Link>
                     </div>
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

        const hotelId= this.props.match.params.id;
        axios.get(`${url}/${hotelId}`)
    .then((restaurant) => {this.setState({details:restaurant.data[0]})})

    }
}
export default HotelDetails;