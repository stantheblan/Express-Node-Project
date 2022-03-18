const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html lang="en" dir="ltr">
              <head>
                {/* charset needs to be Camel Cased in JSX */}
                <meta charSet="utf-8"/>
                {/* This let us dynamically create the title */}
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <h1> <a href={`/products`}>Home</a> / {this.props.title}</h1>
                    {/* This is where our other components will be injected */}
                    {this.props.children}
                </body>
                <footer className="footer">
                    <p>========= <a href="https://github.com/stantheblan/Express-Node-Project" target="_blank" >Stan 2022</a> =========</p>
                </footer>
            </html>
        )
    }
}
module.exports= DefaultLayout;