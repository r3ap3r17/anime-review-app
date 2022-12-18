import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorModal from "../Modals/ErrorModal";
import CardContainer from "../UI/CardContainer";
import "./LoginPage.css";

function LoginPage() {
    const [login, setLogin] = useState({});
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [modal, setModal] = useState(false);

    const usernameInputHandler = (event) => {
        setUsername(event.target.value);
    }
    const passInputHandler = (event) => {
        setPass(event.target.value);
    }

    const modalHandler = () => {
        setModal(false);
    }

    const submitHandler = (form) => {
        form.preventDefault();

        if (username.trim().length === 0 || pass.trim().length === 0) {
            setModal(true);
        } else {
            setLogin({
                username: username,
                password: pass
            });
            console.log(login);
        }
    }

    return (
        <Container>
            { modal ? <ErrorModal modalHandler={ modalHandler } /> : null }
            <CardContainer color="#fff" className="login-form-card">
                <h2 className="mx-auto text-center mb-4"
                    style={ {
                        fontSize: "22px",
                        color: "#2a3444"
                    } }>Login</h2>
                <form id="login-form" onSubmit={ submitHandler }>
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
                    <button type="submit">SUBMIT</button>
                    <p className="text-center p-0">
                        Dont have account? <Link to='/register'>Register</Link>
                    </p>
                </form>
            </CardContainer>
        </Container>
    );
}

export default LoginPage;