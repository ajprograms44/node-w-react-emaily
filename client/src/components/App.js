import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//BroswerRouter: Tells react router how to behave, looks at the curent url and changes the set of components 
//that are visible at any given time
//Route: Is a react copmoonent that is used to set up a rule between a certain route and a set of 
//compoenents that will be visible on the screen
import {connect} from 'react-redux';
import * as actions from '../actions'

import Header from './Header'
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing= () => <h2>Landing</h2>


class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
       <BrowserRouter>
         <div>
           <Header/>
           <Route path="/" component={Landing} exact/>
           <Route path="/surveys" component={Dashboard} exact/>
           <Route path="/surveys/new" component={SurveyNew}/>
         </div>
       </BrowserRouter>
     </div>
     );
  }
 
};

export default connect(null, actions)(App); 