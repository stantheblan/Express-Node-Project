const React = require('react')
class Show extends React.Component {
render () {
    const product = this.props.product
    return (
        <div>
            <link rel="stylesheet" href="/css/app.css"/>     
            <h1> Show Page </h1>
            <h1><a href={`/products`}>Home</a></h1><br/>
            Product Name: {product.name}<br/>
            <image src={product.img}/><br/>
            Product Description: {product.description}<br/>
            Product Price: {product.price}<br/>
            Product Quantity: {product.qty}<br/>
            <a href={`/products/${product._id}/edit`}>Edit This Product</a> <br/>
        </div>
        );
    }
}
module.exports  = Show;