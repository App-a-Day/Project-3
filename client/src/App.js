import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './components/Home/Home';
import About from './components/About/About';
import Error from './components/Error/Error';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import CodeEditor from './components/CodeEditor/CodeEditor';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
      <BrowserRouter>
   <div>
     <Navigation />  
     <Switch>>
       <Route path="/" component={Home} exact />
       <Route path="/about" component={About} />
       <Route path="/freecode" component={CodeEditor} />
       <Route path="" component={Error} />
     </Switch>
     </div>
     </BrowserRouter>
     </div>
     </Provider>
    );
  }
}

export default App;
