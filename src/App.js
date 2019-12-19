import React from 'react'
import {HashRouter as Router, Route,Switch,Redirect } from "react-router-dom";
import Login from './login/Login'
import  Video from './Pages/Video'



const App = () => (
   <Router>
       <Switch>
           <Route path='/' exact render={() => <Redirect to='/login' />} />
           <Route path='/login' component={Login} />
           <Route path='/video' component={Video} />
       </Switch>
   </Router>
)

export default App;
