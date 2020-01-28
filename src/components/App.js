import React from 'react';
import Navbar from './misc/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './misc/Login';
import Register from './misc/Register';
import Tweets from './tweets/Tweets';
import AuthenticatedRoute from './misc/AuthenticatedRoute';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>

        <main className="container">
          <Switch>
            <AuthenticatedRoute exact path="/tweets">
              <Tweets/>
            </AuthenticatedRoute>

            <Route exact path="/login">
              <Login/>
            </Route>

            <AuthenticatedRoute exact path="/signup">
              <Register/>
            </AuthenticatedRoute>

            <Redirect to="/tweets"/>
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
