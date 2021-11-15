import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';

import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
  const [isAuth, setIsAuth] = useState(true)
  const authChange = () => {
    setIsAuth(true)
  }
  return (

    <Router>
      <Container>
        <Header isAuth={isAuth} authChange={authChange} />
      </Container>
      <Routes>
        <Route path='/' element={<Home />} exact={true} />
        <Route path='/registration' element={<Registration />} exact={true} />
        <Route path='/login' element={<Login />} exact={true} />
      </Routes>
    </Router>
  );
}

export default App;
