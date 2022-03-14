const React = require('react')
class Index extends React.Component{
    // products = this.props.products
    render() {
        return (
            <div>
            <link rel="stylesheet" href="/css/app.css"/>     
                <h1>Products Index Page</h1>
                <ul>
                    {this.props.products.map((product, i) => {
                        return (
                            <li key = {i}>
                                <a href={`/products/${ product.id }`}><image src = {product.image}/></a> 
                                Product: {product.name} <br />
                                Image: {product.img} <br />
                                Description: {product.description} <br />
                                Price: {product.price} <br />
                                Quantity: {product.qty} <br />
                                <a href = {`/products/${product._id}/edit`}>Edit This Product</a>
                                {/* Delete here */}
                                <form action = {`/products/${product._id}?_method=DELETE`} method = "POST">
                                    <input type = "submit" value = "DELETE"/>
                                </form>
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href="/products/new">Create a New Product</a>
                </nav>
            </div>
        )
    }
}

module.exports = Index