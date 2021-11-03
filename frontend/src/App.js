import React from 'react'
import './index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
function App() {
  return (
    <Router>

      <Navbar />

      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/registration' exact>
          <Registration />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App