import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import studentReducer from './reducers/studentReducer'

import Home from './Home';
import Students from './containers/StudentsContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

let store = createStore(studentReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Container>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/students" component={Students} />
        </Switch>
        <Footer/>
      </Container>
    </Router>
  </Provider>,
  document.getElementById('root')
);