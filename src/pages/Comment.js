import React from 'react';
import { Link } from 'react-router-dom';



export default class Comment extends React.Component {
render() {
const path = `/products/${this.props.ProductName}`;
return (
<tr>
<td>{this.props.id}</td>
<td><Link to={path}>{this.props.ProductName}</Link></td>
<td>{this.props.Quantity}</td>
<td>{this.props.Price}</td>
</tr>
);
}
}

  //export default Comment;