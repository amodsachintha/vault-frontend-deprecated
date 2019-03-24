import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Container} from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import About from './pages/About';

function Index() {
    return <h2>Home</h2>;
}

class App extends Component {
  componentDidMount(){
    console.log('mounted!');
  }

  render() {
    return (
      <Container>
        <ToastContainer/>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/login/">Login</Link>
                </li>
              </ul>
            </nav>
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/login/" component={Login} />
          </div>
        </Router>
      </Container>
    );
  }
}

export default App;
