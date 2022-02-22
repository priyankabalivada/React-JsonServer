import React from 'react'
import CommentApi from '../Data/CommentApi';
import axios from 'axios';
//import "Access-Control-Allow-Origin";
import { Formik, Form, Field } from 'formik';
export default class AddProduct extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
    
      ProductName:'',
      Quantity:'',
      Price:'',
      errors: {}
      
      };
   
    }
    handleValidation() {    
      const { ProductName} = this.state;    
      const { Quantity} = this.state;    
      const { Price} = this.state;    

      let errors = {};    

      let formIsValid = true;    

    //Name
    if (!ProductName) {
      formIsValid = false;
      errors["ProductName"] = "Cannot be empty";
    }
    if (!Quantity) {
      formIsValid = false;
      errors["Quantity"] = "Cannot be empty";
    }  
    if (!Price) {
      formIsValid = false;
      errors["Price"] = "Cannot be empty";
    }
    this.setState({ errors: errors });
    return formIsValid;
    }
   
      changeHandler=(e)  =>{
        this.setState({
          [e.target.name]: e.target.value
      })
        
    }
      submitHandler = (e) => {
        e.preventDefault()
        if (this.handleValidation()) {
          alert("Form submitted");
        
        axios.post(' http://localhost:3001/products', this.state)
        .then(response => {
            console.log(response)
        })}
        else {
          alert("Form has errors.");
        }
    }
      
      
      render() {
       // const {ProductNameErr} = this.state.formErrors;
        const{ProductName,Quantity,Price}=this.state;
       
        return (
          <div>
            
            <form onSubmit={this.submitHandler}>
              <label for="ProductName">Product Name</label><br></br>
                  <input
                    name="ProductName"
                    type="text"
                    onChange={this.changeHandler}
                    value={ProductName}
                    id="ProductName"
                    />
              <span style={{ color: "red" }}>{this.state.errors["ProductName"]}</span>
              <br />   
                            
                  
                
                  <br />
                  <label for="Quantity">Quantity</label><br></br>
                  <input
                    name="Quantity"
                    type="text"
                    onChange={this.changeHandler}
                    value={Quantity}
                    />
                       <span style={{ color: "red" }}>{this.state.errors["Quantity"]}</span>
                    <br />
                    <label for="Price">Price</label><br></br>
                    <input
                      name="Price"
                      type="text"
                      onChange={this.changeHandler}
                      value={Price}
                      />
                    
                    <span style={{ color: "red" }}>{this.state.errors["Price"]}</span>
                    <br />
                   
                    <br />
               <button>submit</button>
               </form>
                </div>
           
  )
}
}
















