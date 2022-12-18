import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../Login/LoginPage";
import SignUpPage from "../Register/SignUpPage";

function LandingPage() {

    const [inputBlank, setInputBlank] = useState(false);

    // Data validation functions
    const checkIfBlank = (sign) => {
        for (let key of Object.keys(sign)) {
            if (sign[key].trim().length === 0) {
                setInputBlank(false)
            } else { setInputBlank(true) }
        }
        return inputBlank;
    }

    const token = false;

    const Home = () => {
        return <>WELCOME</>
    }

    return (
        <Routes>
            <Route path='/' element={ token ? <Home /> : <LoginPage checkInputs={ checkIfBlank } /> } exact />
            <Route path='/register' element={ !token ? <SignUpPage checkInputs={ checkIfBlank } /> : null } />
        </Routes>
    );
}

export default LandingPage;