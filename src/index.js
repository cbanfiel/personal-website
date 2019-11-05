import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Personal from './Personal';
import Contact from './Contact';
import Home from './Home';
import * as serviceWorker from './serviceWorker';
import Navbar from './components/Navbar';

const routing = (
    <Router>
        <Navbar></Navbar>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Personal} />
        <Route path="/contact" component={Contact} />
        <Route path="/onpapersports" component={App} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
