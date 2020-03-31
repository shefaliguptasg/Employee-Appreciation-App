import React from 'react';
import { Router,Route, Switch } from 'react-router-dom'
// We will create these two pages in a moment
import './App.css';
import LoginForm from './Componets/LoginForm';
import RegisterForm from './Componets/RegisterForm';
import MainUserForm from './Componets/MainUserForm';
import history from './Componets/history'
import UserDetails from './Componets/UsersDetails';
import MainForm from './Componets/MainUserForm';

export default function App() {
  return (
    <Router history={history}>
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route  exact path ="/MainFormUser" component={MainForm}/>
      {/* <Route exact Path ="/Register"component={RegisterForm}/>   */}
      <Route exact Path ="/MainFormUser/:id"component={UserDetails}/> 
       
    </Switch>
    </Router>
  )
}

// const App = () => (
//   <Container>
//     <MainForm />
//   </Container>