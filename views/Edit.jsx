const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <div>
      <DefaultLayout title="Edit Page"> 
      <link rel="stylesheet" href="/css/app.css"/>         
      {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
        <form action={`/products/${this.props.product._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.product.name}/><br/>
          Image: <input type="text" name="img" defaultValue={this.props.product.img}/><br/>
          Description: <input type="text" name="description" defaultValue={this.props.product.description}/><br/>
          Price: <input type="text" name="price" defaultValue={this.props.product.price}/><br/>
          Quantity: <input type="text" name="qty" defaultValue={this.props.product.qty}/><br/>              
          <input type="submit" name="" value="Edit"/>
        </form>
      </DefaultLayout>
      </div>);
}
}
module.exports= Edit;