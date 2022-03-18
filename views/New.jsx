const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div className='headDiv'>
        <link rel="stylesheet" href="/css/app.css"/>     
            
            <div><h1> <a href={`/products`}>Home</a> / New Product Page</h1></div>
            <form action="/products" method="POST">
                Name: <input type="text" name="name" /><br/>
                Description: <input type="text" name="description" className="inputClass"/><br/>
                Image: <input type="text" name="img" /><br/>
                Price: <input type="number" step="0.01" name="price" min="0"/><br/>
                Quantity: <input type="number" name="qty" min="0"/><br/>              
                <input type="submit" name="" value="Create Product"/>
            </form>
            <footer className="footer">
                <p>========= <a href="https://github.com/stantheblan/Express-Node-Project" target="_blank" >Stan 2022</a> =========</p>
            </footer>
        </div>);
    }
}

module.exports = New;