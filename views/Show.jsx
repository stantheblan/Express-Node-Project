const React = require('react')
class Show extends React.Component {
render () {
    const product = this.props.product
    return (
        <div className='headDiv'>
            <link rel="stylesheet" href="/css/app.css"/>     
                <h1> <a href={`/products`}>Home</a> / Show Page</h1><br/>
            <div className="productDiv">
                <h1 className='nameC'>{product.name}</h1>
                <div><a href={product.img}><image src={product.img} id="imgID"/></a><br/></div>
                
                <p>Product Description: {product.description}</p>
                <p>Product Price: ${product.price.toLocaleString("en-US")}</p>
                <p>Product Quantity: {product.qty > 0 ? product.qty.toLocaleString("en-US") : 'Out of Stock'}</p>
                <form action = {`/products/${product._id}?_method=DELETE`} method = "POST">
                    <input type = "submit" value = "DELETE" className="buttonC"/>
                </form>
                {/* =================================================================== */}
                <a href={`/products/${product._id}/edit`}>Edit This Product</a> <br/>
                <form action={`/products/${product._id}?_method=PATCH`} method="POST">
                {product.qty > 0 ? <input type="submit" value="    BUY   " className="buttonC"/> : null}
                </form>
            </div>
            <footer className="footer">
                <p>========= <a href="https://github.com/stantheblan/Express-Node-Project" target="_blank" >Stan 2022</a> =========</p>
            </footer>
        </div>
        );
    }
}
module.exports  = Show;