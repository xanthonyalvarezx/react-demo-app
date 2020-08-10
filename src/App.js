import React, { Component } from 'react';
import {Route} from 'react-router-dom' 
import logo from './logo.svg';
import './App.css';
import Clock from './components/clock/Clock'
import Welcome from './components/welcome/welcome'
import Contact from './components/contact/Contact'
import { render, findByLabelText } from '@testing-library/react';
import Navigation from './components/Navigation/Nav'

class App extends Component {
render(){

  let appStyle={
      backgroundColor:this.props.bgcolor,
      color:this.props.color,
      display:'flex',
      boxShadow:'5px 5px 5px 5px #000000',
      fontFamily:'Carter One, cursive',
      padding:'45px',
      margin:'10px',
      justifyContent:'flex-end',
      alignItems:'flex-start',
      
     
  }


  return (
    <div className="App" style={appStyle} >
        <Navigation/>

        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props}
           name='Anthony'
            />}
        />
        <Route
          exact
          path="/:mike"
          render={(props) => <Welcome {...props}
           name='Mike'
            />}
        />
        
        <Route  
        path="/clock" 
        component={Clock} 
        />

        <Route 
        path="/contact" 
        component={Contact} 
        />
    </div>
  );
  }
}

export default App;
