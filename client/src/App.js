import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
//186667235953-j2fte15v0l536qg9f09iqsuaiearrt4o.apps.googleusercontent.com
import Home from './components/Home/Home';
import About from './components/About/About';
import Error from './components/Error/Error';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import FreeCode from './components/FreeCode/FreeCode';
import PageJscript from './components/pages/PageJscript';
import Login from './components/Login/Login';
import Learn from './components/Learn/Learn';
import Lesson1 from './components/Lessons/Lesson1';
import Lesson2 from './components/Lessons/Lesson2';
import Lesson3 from './components/Lessons/Lesson3';
import Resources from './components/Resources/Resources';

class App extends Component {

  render() {
    console.log('Logged In? ',this.props.isSignedIn)
    if (this.props.isSignedIn) {
      return (
        <div>
          <BrowserRouter>
            <div>
              <Navigation />
              <Switch> 
         <Route path="/" component={Home} exact />
         <Route path="/about" component={About} />
         <Route path="/freecode" component={FreeCode} />
         <Route path="/learn" component={Learn}/>
         <Route path="/lesson1" component={Lesson1}/>
         <Route path="/lesson2" component={Lesson2}/>
         <Route path="/lesson3" component={Lesson3}/>
         <Route path="/login" component={Login}/>
         <Route path="/jscript" component={PageJscript}/>
         <Route path="/resources" component={Resources}/>
         <Route path="" component={Error} />
       </Switch>
       </div>
       </BrowserRouter>
       </div>
      );
    }
    else {
      return (
        <div>
          <BrowserRouter>
            <div>
              <Navigation />
              <Switch> 
         <Route path="/" component={Home} exact />
         <Route path="/about" component={About} />
         <Route path="/freecode" component={Login} />
         <Route path="/learn" component={Login}/>
         <Route path="/lesson1" component={Login}/>
         <Route path="/lesson2" component={Login}/>
         <Route path="/lesson3" component={Login}/>
         <Route path="/login" component={Login}/>
         <Route path="/jscript" component={Login}/>
         <Route path="/resources" component={Login}/>
         <Route path="" component={Error} />
       </Switch>
       </div>
       </BrowserRouter>
       </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
   { }) (App);