import { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorModal from "../Modals/ErrorModal";
import CardContainer from "../UI/CardContainer/CardContainer";
import "./LoginPage.css";

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
            <CardContainer color="#fff" className="login-form-card mx-auto">
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
                        ref={ usernameInput }
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        ref={ passwordInput }
                    />
                    <button type="submit">SUBMIT</button>
                    <p className="text-center p-0 mb-0">
                        Dont have account? <Link to='/register'>Register</Link>
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