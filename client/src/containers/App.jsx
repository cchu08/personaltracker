import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store from '../store/configureStore';

import Hello from '../components/Hello';
import Bye from '../components/Bye';
import Search from '../containers/Search';

const FourOhFour = () => <h1>404</h1>;

const App = () =>
  <Provider store={store}>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route path="/bye" component={Bye} />
        <Route path="/search" component={Search} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Provider>;

export default App;
