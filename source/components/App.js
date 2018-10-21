import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Popular from './Popular';
import Results from './Results';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/battle/results" component={Results} />
            <Route path="/popular" component={Popular} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
        </div>
      </Router>
    );

    // Equal
    /*
      return React.createElement(
        'div',
        null,
        'Hello world!'
      );
    */
  }

}

export default App;
