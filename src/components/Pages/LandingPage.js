import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../Login/LoginPage";
import SignUpPage from "../Register/SignUpPage";
import HomePage from "./HomePage";

function LandingPage() {
    const user = {
        username: 'StandardUser',
        password: '12345'
    }
    const [token, setToken] = useState(false);

    const handleToken = () => {
        setToken(false);
    }

    const validateUser = (usernameInput, passwordInput) => {
        if (usernameInput === user.username && passwordInput === user.password) {
            setToken(true)
        } else (
            handleToken()
        )

        return token;
    }

    return (
        <Routes>
            <Route path='/' element={
                token ?
                    <HomePage handleToken={ handleToken } />
                    :
                    <LoginPage handleLogin={ validateUser } user={ user } /> } exact />
            <Route path='/register' element={ !token ? <SignUpPage /> : null } />
        </Routes>
    );
}

export default LandingPage;