import { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorModal from "../Modals/ErrorModal";
import CardContainer from "../UI/CardContainer/CardContainer";
import styles from "./LoginPage.module.css";

function LoginPage(props) {
    const usernameInput = useRef();
    const passwordInput = useRef();
    const [modal, setModal] = useState(false);

    const modalHandler = () => {
        setModal(!modal);
    }

    const submitHandler = (form) => {
        form.preventDefault();

        let username = usernameInput.current.value;
        let pass = passwordInput.current.value;

        if (!props.validateUser(username, pass)) modalHandler()
    }

    return (
        <Container>
            { modal ?
                <ErrorModal modalHandler={ modalHandler } >
                    Username or Password incorrect !
                </ErrorModal> : null }
            <CardContainer color="#fff" className={ `${styles['login-form-card']} mx-auto` }>
                <h2 className={ `${styles['form-title']} mx-auto text-center mb-4` }>Login</h2>
                <form id="login-form" className={ styles['login-form'] } onSubmit={ submitHandler }>
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        ref={ usernameInput }
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        ref={ passwordInput }
                    />
                    <button className={ styles.loginBtn } id="loginSubmitButton" type="submit">SUBMIT</button>
                    <p className="text-center p-0 mb-0">
                        Dont have account? <Link className={ styles['form-link'] } to='/register'>Register</Link>
                    </p>
                </form>
            </CardContainer>
            <div className="text-center text-light mt-3">
                <p className="m-0">Username: { props.user.username }</p>
                <p className="m-0">Password: { props.user.password }</p>
            </div>
        </Container >
    );
}

export default LoginPage;