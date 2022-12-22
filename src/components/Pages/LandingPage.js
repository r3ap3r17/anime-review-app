import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../Login/LoginPage";
import SignUpPage from "../Register/SignUpPage";
import HomePage from "./HomePage";

function LandingPage() {
    const username = 'User';
    const password = '12345';
    const [token, setToken] = useState(false);

    const handleToken = () => {
        setToken(false);
    }

    const validateUser = (usernameInput, passwordInput) => {
        if (usernameInput === username && passwordInput === password) {
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
                    <LoginPage handleLogin={ validateUser } /> } exact />
            <Route path='/register' element={ !token ? <SignUpPage /> : null } />
        </Routes>
    );
}

export default LandingPage;