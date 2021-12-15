
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Redirect, Navigate } from 'react-router-dom'
import Header from './components/Header';
import CourseInfo from './pages/CourseInfo';
import Education from './pages/Education';

import Home from './pages/Home';
import Lesson from './pages/Lesson';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Registration from './pages/Registration';

function App() {
  const { isAuth } = useSelector(state => state.user)

  return (

    <Router>
      <Container>
        <Header />
      </Container>
      <Routes>
        <Route path='/' element={<Home />} exact={true} />
        <Route path='/registration' element={<Registration />} exact={true} />
        <Route path='/login' element={<Login />} exact={true} />
        <Route path='/course/:id' element={<CourseInfo />} exact={true} />
        {isAuth ? <>
          <Route path='/profile/:id' element={<Profile />} exact={true} />
          <Route path='/education/:id' element={<Education />} exact={true} />
          <Route path='/lesson/:id' element={<Lesson />} exact={true} />
        </> : <Route path='*' element={<Navigate to='/' />} exact={true} />}

      </Routes>
    </Router>
  );
}

export default App;
