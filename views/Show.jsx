const React = require('react')
class Show extends React.Component {
render () {
    const fruit = this.props.fruit
    return (
            <div>
                <link rel="stylesheet" href="/css/app.css"/>     
                <h1> Show Page </h1>
            </div>
        );
    }
}
module.exports  = Show;