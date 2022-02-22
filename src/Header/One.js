
import {  Link } from "react-router-dom";

const One = () => {
  return (
    <>
      <nav>
        <ul>
        <li>
            <Link to="/">about</Link>
          </li>
          <li>
            <Link to="/products">product</Link>
          </li>
          <li>
            <Link to="/AddProduct">Add product</Link>
          </li>
          
        </ul>
      </nav>

    
    </>
  )
};


export default One;

    

