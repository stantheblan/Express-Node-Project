const React = require('react');
const DefaultLayout = require('./Layout/Default.jsx')

class New extends React.Component {
  render() {
    return (
        <div className='headDiv'>
            <DefaultLayout title="New Page"> 
            <link rel="stylesheet" href="/css/app.css"/>     
                <form action="/products" method="POST">
                    Name: <input type="text" name="name" /><br/>
                    Description: <input type="text" name="description" className="inputClass"/><br/>
                    Image: <input type="text" name="img" /><br/>
                    Price: <input type="number" step="0.01" name="price" min="0"/><br/>
                    Quantity: <input type="number" name="qty" min="0"/><br/>              
                    <input type="submit" name="" value="Create Product"/>
                </form>
                </DefaultLayout>
            </div>);
    }
}

module.exports = New;