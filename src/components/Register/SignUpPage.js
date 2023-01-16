import { useReducer, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorModal from "../Modals/ErrorModal";
import CardContainer from "../UI/CardContainer";
import ErrorMessage from "../UI/ErrorMessage";
import "./SignUpPage.css";

// First name must contain 2 strings each starting with Uppercase
const isValidFullName = (name) => {
    return name.split(" ").length > 1;
}

// Username must start with Uppercase and be longer than 5
const isValidUsername = (username) => {
    return /[A-Z]/.test(username.charAt(0));
}

// Password must be longer than 5
const isValidPassword = (password, confirmPassword) => {
    return password.length >= 5 && password === confirmPassword;
}

// Confirm password must be same as password
const isValidConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
}

const fullnameReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: isValidFullName(action.val) };
    }

    return { value: '', isValid: false }
};

const usernameReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: isValidUsername(action.val) };
    }

    return { value: '', isValid: false }
};

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: isValidPassword(action.val, action.pass) };
    }

    return { value: '', isValid: false }
};

const confirmPasswordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: isValidConfirmPassword(action.val, action.pass) };
    }

    return { value: '', isValid: false }
};

function SignUpPage() {

    const [fullnameState, dispatchFullName] = useReducer(fullnameReducer, { value: '', isValid: null });
    const [usernameState, dispatchUsername] = useReducer(usernameReducer, { value: '', isValid: null });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null });
    const [confirmPasswordState, dispatchConfirmPassword] = useReducer(confirmPasswordReducer, { value: '', isValid: null });

    const [modal, setModal] = useState(false);
    const [sign, setSign] = useState({});

    const nameInputHandler = (event) => {
        dispatchFullName({ type: "USER_INPUT", val: event.target.value })
    }

    const usernameInputHandler = (event) => {
        dispatchUsername({ type: "USER_INPUT", val: event.target.value })
    }

    const passInputHandler = (event) => {
        dispatchPassword({ type: "USER_INPUT", val: event.target.value, pass: confirmPasswordState.value })
    }

    const confirmPassInputHandler = (event) => {
        dispatchConfirmPassword({ type: "USER_INPUT", val: event.target.value, pass: passwordState.value })
    }

    const modalHandler = () => {
        setModal(false);
    }


    const submitHandler = (form) => {
        form.preventDefault();


        if (fullnameState.isValid && usernameState.isValid && passwordState.isValid && confirmPasswordState.isValid) {
            setModal(false);
            setSign({
                name: fullnameState.value,
                username: usernameState.value,
                password: passwordState.value,
                confirmPassword: confirmPasswordState.value
            });
            console.log(sign);
        } else {
            setModal(true);
        }
    }

    return (
        <Container>
            { modal ?
                <ErrorModal modalHandler={ modalHandler }>
                    Please provide valid data !
                </ErrorModal> : null }
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
                <form id="sign-form" onSubmit={ submitHandler }>
                    <input
                        name="full-name"
                        type="text"
                        placeholder="Full Name"
                        onChange={ nameInputHandler }
                        value={ fullnameState.value }
                    />
                    <ErrorMessage className={ fullnameState.isValid === false ? 'invalid' : null }>
                        Please provide a valid name
                    </ErrorMessage>


                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        onChange={ usernameInputHandler }
                    />
                    <ErrorMessage className={ usernameState.isValid === false ? 'invalid' : null }>
                        Please provide a valid username
                    </ErrorMessage>

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={ passInputHandler }
                    />
                    <ErrorMessage className={ passwordState.isValid === false ? 'invalid' : null }>
                        Please provide a valid password
                    </ErrorMessage>

                    <input
                        name="confirm-password"
                        type="password"
                        placeholder="Confirm Password"
                        onChange={ confirmPassInputHandler }
                    />
                    <ErrorMessage className={ confirmPasswordState.isValid === false ? 'invalid' : null }>
                        Password must match
                    </ErrorMessage>

                    <button type="submit">SUBMIT</button>
                    <p className="text-center p-0 mb-0">
                        Already have account? <Link to='/'>Login</Link>
                    </p>
                </form>
            </CardContainer>
        </Container>
    );
}

export default SignUpPage;