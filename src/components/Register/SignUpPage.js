import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorModal from "../Modals/ErrorModal";
import CardContainer from "../UI/CardContainer";
import "./SignUpPage.css";

function SignUpPage() {
    const [sign, setSign] = useState({});
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const nameInputHandler = (event) => {
        setName(event.target.value);
    }
    const usernameInputHandler = (event) => {
        setUsername(event.target.value);
    }
    const passInputHandler = (event) => {
        setPass(event.target.value);
    }
    const confirmPassInputHandler = (event) => {
        setConfirmPass(event.target.value);
    }


    const submitHandler = (form) => {
        form.preventDefault();

        // const arr = [name, username, pass, confirmPass];

        if (name.trim().length === 0 || username.trim().length === 0 || pass.trim().length === 0 || confirmPass.trim().length === 0) {
            alert("Sva polja moraju biti popunjena")
        } else {
            setSign({
                name: name,
                username: username,
                password: pass,
                confirmPassword: confirmPass
            });
            console.log(sign);
        }
    }

    return (
        <Container>
            <ErrorModal />
            <CardContainer color="#fff" className="sign-form-card">
                <h2 className="mx-auto text-center mb-2"
                    style={ {
                        fontSize: "22px",
                        color: "#2a3444"
                    } }>Create Account</h2>
                <h2 className="mx-auto text-center mb-4"
                    style={ {
                        fontSize: "14px",
                        color: "#2a3444",
                        opacity: ".5"
                    } }>Enter your credentials</h2>
                <form id="login-form" onSubmit={ submitHandler }>
                    <input
                        name="full-name"
                        type="text"
                        placeholder="Full Name"
                        onChange={ nameInputHandler }
                    />
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        onChange={ usernameInputHandler }
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={ passInputHandler }
                    />
                    <input
                        name="confirm-password"
                        type="password"
                        placeholder="Confirm Password"
                        onChange={ confirmPassInputHandler }
                    />
                    <button type="submit">SUBMIT</button>
                    <p className="text-center p-0">
                        Already have account? <Link to='/'>Login</Link>
                    </p>
                </form>
            </CardContainer>
        </Container>
    );
}

export default SignUpPage;