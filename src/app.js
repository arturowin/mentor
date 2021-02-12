import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { PersistGate } from 'redux-persist/integration/react'

import Navigation from './components/Navigation'
import SignUp from './pages/SignUp'
import SignupDetails from './pages/SignupDetails'
import CreateGroup from './pages/CreateGroup'
import { store, persistor } from './redux/store'
import PrivateRoute from './privateRout'

import 'antd/dist/antd.css'

export const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={createBrowserHistory()}>
        <Navigation />
        <Switch>
          <Route exact path="/" component={SignUp}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/signup-details" component={SignupDetails}/>
          <PrivateRoute path="/create-group" component={CreateGroup}/>
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
)
