const React = require('react')
class Index extends React.Component{
    render() {
        return (
            <div>
            <div className='headDiv'>
                <link rel="stylesheet" href="/css/app.css"/>     
                <h1>Products Index Page</h1>
                <a href="/products/new" id="createN">Create a New Product</a> <br/><br/><br/>
            </div>
                <div id="container">
                    {this.props.products.map((product, i) => {
                        return (
                            <div key = {i} className="productDiv">
                                <h1><a href={`/products/${ product.id }`}>{product.name}</a></h1>
                                <a href={`/products/${ product.id }`}><image src = {product.img} className="imgC"/></a> <br />
                                <p>Description: {product.description}</p>
                                <p>Price: ${product.price.toLocaleString("en-US")}</p>
                                <p>Quantity: {product.qty > 0 ? product.qty.toLocaleString("en-US") : 'Out of Stock'}</p>
                                {/* Delete here */}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

module.exports = Index