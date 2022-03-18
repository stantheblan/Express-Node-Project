const React = require('react')
const DefaultLayout = require('./Layout/Default.jsx')
class Index extends React.Component{
    render() {
        return (
            <div className='headDiv'>
                <DefaultLayout title="Index Page"> 
                    <link rel="stylesheet" href="/css/app.css"/>
                    <a href="/products/new" id="createN">Create a New Product</a> <br/><br/><br/>
                    <div id="container">
                        {this.props.products.map((product, i) => {
                            return (
                                <div key = {i} className="productDiv">
                                    <h1><a href={`/products/${ product.id }`}>{product.name}</a></h1>
                                    <a href={`/products/${ product.id }`}><image src = {product.img} className="imgC"/></a> <br />
                                    <p>Description: {product.description}</p>
                                    <p>Price: ${product.price.toLocaleString("en-US")}</p>
                                    <p>Quantity: {product.qty > 0 ? product.qty.toLocaleString("en-US") : 'Out of Stock'}</p>
                                </div>
                            )
                        })}
                    </div>
                </DefaultLayout>
            </div>
        )
    }
}

module.exports = Index