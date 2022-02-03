
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header';
import MyToast from './components/UI/MyToast';
import AddCard from './pages/AddCard';
import AddCardPromo from './pages/AddCardPromo';
import AdminPanel from './pages/AdminPanel';
import CourseInfo from './pages/CourseInfo';
import Education from './pages/Education';

import Home from './pages/Home';
import Lesson from './pages/Lesson';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import { getAllCards } from './store/actions/cards';
// import { auth } from './store/actions/user';

function App() {
  const { isAuth, message, currentUser } = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(auth())
    dispatch(getAllCards())


  }, [dispatch])
  const isAdmin = currentUser?.user?.roles?.includes('ADMIN')
  console.log(isAdmin);


  return (

    <Router>
      <Container>
        <Header />
        <MyToast message={message} />
      </Container>
      <Routes>
        {/* Только для админа */}

        {isAdmin ? <><Route path='/admin' element={<AdminPanel />} exact={true} />
          <Route path='/addCard' element={<AddCard />} exact={true} />
          <Route path='/card/:id/addCardPromo' element={<AddCardPromo />} exact={true} />
        </> : <Route path='*' element={<Navigate to='/home' />} exact={true} />}


        <Route path='/home' element={<Home />} exact={true} />
        <Route path='/card/:id' element={<CourseInfo />} exact={true} />
        {!isAuth ? <>
          <Route path='/registration' element={<Registration />} exact={true} />
          <Route path='/login' element={<Login />} exact={true} />
        </> : <Route path='*' element={<Navigate to='/home' />} exact={true} />}
        {isAuth ? <>
          <Route path='/profile' element={<Profile />} exact={true} />
          <Route path='/education' element={<Education />} exact={true} />
          <Route path='/lesson/:id' element={<Lesson />} exact={true} />
        </> : <Route path='*' element={<Navigate to='/home' />} exact={true} />}

      </Routes>
    </Router>
  );
}

export default App;
