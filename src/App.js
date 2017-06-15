import React, { Component } from 'react';
import Helmet from 'react-helmet'

class App extends Component {
  render() {
    return (
      <div>
        <Helmet
          style={[{
            cssText: `
              .message {
                text-align: center;
                font-size: 48px;
                color: magenta;
              }
            `
          }]}
        />
        <p className="message">
          Hello World!
        </p>
      </div>
    );
  }
}

export default App;
