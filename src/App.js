import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom' 
import logo from './logo.svg';
import './App.css';
import Clock from './components/clock/Clock'
import Welcome from './components/welcome/welcome'
import Contact from './components/contact/Contact'
import { render, findByLabelText } from '@testing-library/react';
import Navigation from './components/Navigation/Nav'
import Oops from './images/oops-cat.jpeg'
import Default from './components/default/Default'


class App extends Component {
  constructor(props){
    super(props)


    
  }
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
      height:'200px',
      width:'400px'
      
     
  }
  


  
  


  return (
    <div className="App" style={appStyle} >
        
        <Navigation/>
    <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Anthony"/>}
        />

        <Route
          exact
          path="//:name"
          render={(props) => <Welcome {...props}
           name={props.match.params.name}/>}
        />
        
        <Route 
          exact 
          path="/clock" 
          component={Clock} 
        />

      <Route      
       exact
        path="/contact" 
        component={Contact} 
        />

           <Route>
            
               <Default image={Oops} alt='404 Page Not Found'/>
             
           </Route>
        
        
        
    </Switch>
        </div>
    );
  }
}

export default App;
