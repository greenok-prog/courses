
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header';
import ErrorToast from './components/UI/ErrorToast';
import MyToast from './components/UI/MyToast';

import AdminPanel from './pages/AdminPanel';
import ChangeCardInfo from './pages/ChangeCardInfo';
import ChangeLesson from './pages/ChangeLesson';
import ChangeUser from './pages/ChangeUser';
import CourseInfo from './pages/CourseInfo';
import CreateCard from './pages/CreateCard';
import CreateLesson from './pages/CreateLesson';
import CreateUser from './pages/CreateUser';
import Education from './pages/Education';

import Home from './pages/Home';
import Lesson from './pages/Lesson';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import TeachersRoom from './pages/TeachersRoom';
import { getAllCards } from './store/actions/cards';
import { auth } from './store/actions/user';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import config from './config/default.json'


function App() {
  const { isAuth, currentUser, isError, isMessage } = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(auth())
    dispatch(getAllCards())


  }, [dispatch])
  const isAdmin = currentUser?.user?.roles?.includes('ADMIN')
  const isTeacher = currentUser?.user?.roles?.includes('TEACHER')



  return (
    <PayPalScriptProvider options={{ 'client-id': process.env.PAYPAL_CLIENT_ID || config.PAYPAL_CLIENT_ID }}>
      <Router>
        {isError && <ErrorToast />}
        {isMessage && <MyToast />}
        <Container>

          <Header />
        </Container>
        <Routes>
          {/* Только для админа */}

          {isAdmin ? <><Route path='/admin' element={<AdminPanel />} exact={true} />

            <Route path='/createUser' element={<CreateUser />} exact={true} />
            <Route path='/user/:id' element={<ChangeUser />} exact={true} />


          </> : <Route path='*' element={<Navigate to='/home' />} exact={true} />}
          {isTeacher || isAdmin ?
            <>
              <Route path='/addCard' element={<CreateCard />} exact={true} />
              <Route path='/:cardId/:lessonId/changeLesson' element={<ChangeLesson />} exact={true} />
              <Route path='/card/:id/change' element={<ChangeCardInfo />} exact={true} />
              <Route path='/card/:card_id/:block_id/addLession' element={<CreateLesson />} exact={true} /></>
            : <Route path='*' element={<Navigate to='/home' />} exact={true} />}

          <Route path='/home' element={<Home />} exact={true} />
          <Route path='/card/:id' element={<CourseInfo />} exact={true} />
          {!isAuth ? <>
            <Route path='/registration/teacher' element={<Registration role='TEACHER' />} exact={true} />
            <Route path='/registration' element={<Registration role='USER' />} exact={true} />
            <Route path='/login' element={<Login />} exact={true} />
          </> : <Route path='*' element={<Navigate to='/home' />} exact={true} />}
          {isAuth ? <>
            <Route path='/profile' element={<Profile />} exact={true} />
            <Route path='/teachersRoom' element={<TeachersRoom />} exact={true} />
            <Route path='/education' element={<Education />} exact={true} />
            <Route path='/lesson/:id' element={<Lesson />} exact={true} />
          </> : <Route path='*' element={<Navigate to='/home' />} exact={true} />}

        </Routes>
      </Router>
    </PayPalScriptProvider>

  )
}

export default App;
