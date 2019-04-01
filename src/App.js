import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Container} from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import About from './pages/About';
import Home from './pages/Home';
import MenuBar from "./MenuBar";
import File from "./main/collections/models/File"


class App extends Component {
  componentDidMount(){
    console.log('mounted!');
    let f = new File("test.txt",3447748642,"b28719626a5fdbcdc3e3e18b64ac61e4739446428529635dcb48acbeba2767af",new Date(),10,8);
  }

  render() {
    return (
      <Container>
        <ToastContainer/>
        <Router>
          <MenuBar/>
          <div>
            <Route path="/" exact component={Home}/>
            <Route path="/about/" component={About} />
            <Route path="/login/" component={Login} />
          </div>
        </Router>
      </Container>
    );
  }
}

export default App;
