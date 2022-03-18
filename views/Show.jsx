const React = require('react')
const DefaultLayout = require('./Layout/Default.jsx')
class Show extends React.Component {
render () {
    const product = this.props.product
    return (
        <div className='headDiv'>
            <DefaultLayout title="Show Page"> 
            <link rel="stylesheet" href="/css/app.css"/>
                <div className="productDiv">
                    <h1 className='nameC'>{product.name}</h1>
                    <div><a href={product.img}><image src={product.img} id="imgID"/></a><br/></div>
                    
                    <p>Product Description: {product.description}</p>
                    <p>Product Price: ${product.price.toLocaleString("en-US")}</p>
                    <p>Product Quantity: {product.qty > 0 ? product.qty.toLocaleString("en-US") : 'Out of Stock'}</p>
                    <form action = {`/products/${product._id}?_method=DELETE`} method = "POST">
                        <input type = "submit" value = "DELETE" className="buttonC"/>
                    </form>
                    <a href={`/products/${product._id}/edit`}>Edit This Product</a> <br/>
                    <form action={`/products/${product._id}?_method=PATCH`} method="POST">
                    {product.qty > 0 ? <input type="submit" value="    BUY   " className="buttonC"/> : null}
                    </form>
                </div>
            </DefaultLayout>
        </div>
        );
    }
}
module.exports  = Show;