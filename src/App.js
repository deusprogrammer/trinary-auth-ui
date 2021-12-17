import React from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch, Link} from 'react-router-dom'
import CreateUser from './routes/CreateUser'
import Login from './routes/Login'

import './App.css'
import LoginSuccess from './routes/LoginSuccess'
import DevLogin from './routes/DevLogin'
import DevRedirect from './routes/DevRedirect'

function App() {
  return (
    <div className="App">
        <Router history="hash">
            <Switch>
                <Route path={`${process.env.PUBLIC_URL}/register`} exact component={CreateUser} />
                <Route path={`${process.env.PUBLIC_URL}/login`} exact component={Login} />
                <Route path={`${process.env.PUBLIC_URL}/success`} exact component={LoginSuccess} />

                <Route path={`${process.env.PUBLIC_URL}/dev`} exact component={DevLogin} />
                <Route path={`${process.env.PUBLIC_URL}/dev/redirect`} exact component={DevRedirect} />
	              <Redirect to={`${process.env.PUBLIC_URL}/login`} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
