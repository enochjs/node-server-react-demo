import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import { Router } from 'react-router';
import routes from './routes';

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

const App = (store) => (
    <Provider store={store}>
      <Router history={history} >
        { routes }
      </Router>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('app'))

// if (module.hot) {
//   module.hot.accept('../', () => {
//     ReactDOM.render(<App />, document.getElementById('app'))
//   })
// }

// if (module.hot) { // 可以解决热更新失败的问题
//   module.hot.accept();
// }

