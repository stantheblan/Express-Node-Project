const React = require('react')
class Index extends React.Component{
    render() {
        return (
            <div>
            <link rel="stylesheet" href="/css/app.css"/>     
                <h1>Products Index Page</h1>
                <a href="/products/new">Create a New Product</a> <br/><br/><br/>
                <div id="">{/* ========================================================= */}
                    {this.props.products.map((product, i) => {
                        return (
                            <li key = {i}>
                                Product: <a href={`/products/${ product.id }`}>{product.name}</a> <br />
                                <a href={`/products/${ product.id }`}><image src = {product.img}/></a> <br />
                                Description: {product.description} <br />
                                Price: {product.price} <br />
                                Quantity: {product.qty > 0 ? product.qty : 'Out of Stock'} <br />
                                {/* Delete here */}
                            </li>
                        )
                    })}
                </div>


            </div>
        )
    }
}

module.exports = Index