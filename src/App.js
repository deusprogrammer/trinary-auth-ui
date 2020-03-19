import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import CreateUser from './routes/CreateUser'
import Login from './routes/Login'

import './App.css'
import LoginSuccess from './routes/LoginSuccess'

function App() {
  return (
    <div className="App">
        <Router history="hash">
            <Switch>
                <Route path={`${process.env.PUBLIC_URL}/register`} exact component={CreateUser} />
                <Route path={`${process.env.PUBLIC_URL}/login`} exact component={Login} />
                <Route path={`${process.env.PUBLIC_URL}/success`} exact component={LoginSuccess} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;