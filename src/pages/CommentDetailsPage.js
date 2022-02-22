import { useParams } from "react-router-dom";

 const CommentDetailsPage = (props) => {

      const { ProductName } = useParams()
      alert("Do you want to view details?");
      return (
         <div><h1> The Product Name is : {ProductName} </h1></div>
      );
  };  
  export default CommentDetailsPage; 