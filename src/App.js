import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import SignUpPage from "./components/Register/SignUpPage";
import HomePage from "./components/Pages/HomePage";
import Layout from './components/Layout/Layout';
import NewsPage from './components/Pages/NewsPage';
import AboutPage from './components/Pages/AboutPage';

function App() {
  const user = {
    username: 'StandardUser',
    password: '12345'
  }

  // When token is true app returns HomePage, otherwise returns landingPage
  const [token, setToken] = useState(false);
  // Used to logout from app
  const handleLogout = () => {
    sessionStorage.setItem('token', 'LOGGED_OUT')
    setToken(false);
  }

  useEffect(() => {
    if (sessionStorage.getItem('token') === 'LOGGED_IN') {
      setToken(true);
    }
  }, []);

  const validateUser = (usernameInput, passwordInput) => {
    if (usernameInput === user.username && passwordInput === user.password) {
      sessionStorage.setItem('token', 'LOGGED_IN');
      setToken(true)
    } else (
      handleLogout()
    )

    return token;
  }

  // This login system is just a concept id doesnt really work as it should !!!

  return (
    <Layout token={ token } handleLogout={ handleLogout }>
      <Routes>
        <Route path='/' element={
          token ?
            <HomePage exact />
            :
            <LoginPage validateUser={ validateUser } user={ user } /> } />
        <Route path='/register' element={ !token ? <SignUpPage /> : null } />
        <Route path='/news' element={ token ?
          <NewsPage />
          :
          <LoginPage validateUser={ validateUser } user={ user } /> } />
        <Route path='/about' element={ token ?
          <AboutPage />
          :
          <LoginPage validateUser={ validateUser } user={ user } /> } />
      </Routes>
    </Layout>
  );
}

export default App;
