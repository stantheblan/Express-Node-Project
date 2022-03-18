const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./Layout/Default.jsx')

class Edit extends React.Component{
    render() {
        return (
            <div className="headDiv">
                <DefaultLayout title="Edit Page"> 
                    <link rel="stylesheet" href="/css/app.css"/>
                    <form action={`/products/${this.props.product._id}?_method=PUT`} method="POST">
                        Name: <input type="text" name="name" defaultValue={this.props.product.name}/><br/>
                        Image: <input type="text" name="img" defaultValue={this.props.product.img}/><br/>
                        Description: <input type="text" name="description" defaultValue={this.props.product.description}/><br/>
                        Price: <input type="number" name="price" defaultValue={this.props.product.price} min="0"/><br/>
                        Quantity: <input type="number" name="qty" defaultValue={this.props.product.qty} min="0"/><br/>              
                        <input type="submit" value="Finish Edit" className="buttonC"/>
                    </form>
                </DefaultLayout>
            </div>
        );
}
}
module.exports= Edit;