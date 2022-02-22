
import React from "react";
import CommentList from "./CommentList";
import CommentApi from '../Data/CommentApi.js';
//import axios from "axios";
export default class Product extends React.Component
{
    constructor(props)
    {
        super(props);
         this.state={
               products:[] 
            };
        }
        componentDidMount(){
        CommentApi.getAllComponents(data=>this.setState({products: data})); // takes products from line12
       
    } // fetches data in json format from backend axions
   
      
   
      
    
   
        render(){
             return(
                  <>
                  <CommentList products={this.state.products}/>
                  <div className="card-body">
                    
                </div>
                  </> 
                  );
    }
 }



 
