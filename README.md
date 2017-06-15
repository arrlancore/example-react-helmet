This project shows how there is a flash of unstyled content when a rendered element depends on CSS set by react-helmet.

You can run the app yourself using `yarn start` (or `npm run start`).

---

Given app code:

```js
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
```

You will see this one first load.

![](./FUOC.gif)