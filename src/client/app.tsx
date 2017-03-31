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
