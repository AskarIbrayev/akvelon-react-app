import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import ErrorPage from './pages/ErrorPage';
import { useAppSelector } from './hooks/redux';
import MyPage from './pages/MyPage';

// when you first visit the site all the urls redirected to the login page 
// and you can see the particular pages only
// and once you login you will get to the home page
// while logged in all other urls not mentioned in the list are redirected to the error page

function App() {
  const isAuth = useAppSelector(state => state.isAuthReducer.value)
  return (
    <>
      {
        isAuth ? 
        <Routes>
          <Route  path='/' element={ < HomePage /> } />
          <Route  path='/mypage' element={ < MyPage /> } />
          <Route  path='/users/:userID' element={ < UserPage /> } />
          <Route  path='*' element={< ErrorPage />}/>
        </Routes>
        :
        <Routes>
          <Route  path='/auth' element={<LoginPage />}/>
          <Route  path='/register' element={<SignupPage />}/>
          <Route  path='*' element={<LoginPage />}/>
        </Routes>
      }
      
    </>
  );
}

export default App;
