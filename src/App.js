import React from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import One from "./Header/One";
import Bout from "./pages/Bout";
import Product from "./pages/Product";
import AddProduct from "./Component/Addproduct";
import CommentDetailsPage from "./pages/CommentDetailsPage";
import { BrowserRouter as  NavLink} from 'react-router-dom';
class Links extends React.Component {
  render() {
  return (
  <nav>
  <NavLink exact activeClassName="active" to="/">Comments</NavLink>
  <NavLink activeClassName="active" to="/about">About</NavLink>
  </nav>
  );
  }
  }
export default class App extends React.Component {
 render(){

  return (
    <BrowserRouter>
    
      <Routes>
      <Route path="/" element={<Bout/>}/>

<Route path="products" element={<Product/>} />
<Route path="AddProduct" element={<AddProduct/>} />
<Route  path="products/:ProductName" element={<CommentDetailsPage/>} />
      
      
      </Routes>
      <One/>
    </BrowserRouter>
  );
}
}

