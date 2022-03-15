const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
        <link rel="stylesheet" href="/css/app.css"/>     
            <h1>New Product page</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/products" method="POST">
              Name: <input type="text" name="name" /><br/>
              Description: <input type="text" name="description" /><br/>
              Image: <input type="text" name="img" /><br/>
              Price: <input type="number" step="0.01" name="price" /><br/>
              Quantity: <input type="number" name="qty" /><br/>              
              <input type="submit" name="" value="Create Product"/>
            </form>
        </div>);
    }
}

module.exports = New;