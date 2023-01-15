import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../Login/LoginPage";
import SignUpPage from "../Register/SignUpPage";
import HomePage from "./HomePage";

function LandingPage() {
    const user = {
        username: 'StandardUser',
        password: '12345'
    }

    // When token is true app returns HomePage, otherwise returns landingPage
    const [token, setToken] = useState(false);
    // Used to logout from app
    const handleLogout = () => {
        localStorage.setItem('token', 'LOGGED_OUT')
        setToken(false);
    }

    useEffect(() => {
        if (localStorage.getItem('token') === 'LOGGED_IN') {
            setToken(true);
        }
    }, []);

    const validateUser = (usernameInput, passwordInput) => {
        if (usernameInput === user.username && passwordInput === user.password) {
            localStorage.setItem('token', 'LOGGED_IN');
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

export default LandingPage;