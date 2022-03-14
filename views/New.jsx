const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
        <link rel="stylesheet" href="/css/app.css"/>     
            <h1>New Product page</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/products" method="POST">
            </form>
        </div>);
    }
}

module.exports = New;