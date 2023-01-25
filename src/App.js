import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import SignUpPage from "./components/Register/SignUpPage";
import HomePage from "./components/Pages/HomePage";

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

  return (
    <Routes>
      <Route path='/' element={
        token ?
          <HomePage handleLogout={ handleLogout } />
          :
          <LoginPage validateUser={ validateUser } user={ user } /> } exact />
      <Route path='/register' element={ !token ? <SignUpPage /> : null } />
    </Routes>
  );
}

export default App;
