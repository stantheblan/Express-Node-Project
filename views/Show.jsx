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
            Product Quantity: {product.qty > 0 ? product.qty : 'Out of Stock'}<br/>
            {/* =================================================================== */}
            <a href={`/products/${product._id}/edit`}>Edit This Product</a> <br/>
            <form action={`/products/${product._id}?_method=PATCH`} method="POST">
            {product.qty > 0 ? <input type="submit" value="    BUY   "/> : null}
            </form>
            <form action = {`/products/${product._id}?_method=DELETE`} method = "POST">
                <input type = "submit" value = "DELETE"/>
            </form>
        </div>
        );
    }
}
module.exports  = Show;