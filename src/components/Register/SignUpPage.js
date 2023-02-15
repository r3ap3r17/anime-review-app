import { useReducer, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorModal from "../Modals/ErrorModal";
import SuccessModal from "../Modals/SuccessModal";
import CardContainer from "../UI/CardContainer/CardContainer";
import InputControlGroup from "../UI/InputControlGroup/InputControlGroup";
import styles from "./SignUpPage.module.css";

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

    const [errorModal, setErrorModal] = useState(null);
    const [successModal, setSuccessModal] = useState(null);
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

    const errorModalHandler = () => {
        setErrorModal(false);
    }

    const successModalHandler = () => {
        setSuccessModal(false);
    }


    const submitHandler = (form) => {
        form.preventDefault();


        if (fullnameState.isValid && usernameState.isValid && passwordState.isValid && confirmPasswordState.isValid) {
            setSuccessModal(true);
            setSign({
                name: fullnameState.value,
                username: usernameState.value,
                password: passwordState.value,
                confirmPassword: confirmPasswordState.value
            });
            console.log(sign);
        } else {
            setErrorModal(true);
        }
    }

    return (
        <Container>
            {
                errorModal &&
                <ErrorModal modalHandler={ errorModalHandler }>
                    Please provide valid data !
                </ErrorModal>
            }
            {
                successModal &&
                <SuccessModal modalHandler={ successModalHandler }>
                    Account created !
                </SuccessModal>
            }
            <CardContainer color="var(--white)" className={ `${styles['sign-form-card']} mx-auto` }>
                <h2 className={ `${styles['form-title']} mx-auto text-center mb-2` }>Create Account</h2>
                <h2 className={ `${styles['form-description']} mx-auto text-center mb-4` }>Enter your credentials</h2>
                <form id="sign-form" className={ styles['sign-form'] } onSubmit={ submitHandler }>
                    <InputControlGroup
                        className={ styles.input }
                        name="full-name"
                        type="text"
                        placeholder="Full Name"
                        onChange={ nameInputHandler }
                        value={ fullnameState.value }
                        isValid={ fullnameState.isValid }
                        errorMessage="Please provide a valid name"
                    />

                    <InputControlGroup
                        name="username"
                        type="text"
                        placeholder="Username"
                        className={ styles.input }
                        onChange={ usernameInputHandler }
                        isValid={ usernameState.isValid }
                        errorMessage="Username must start with uppercase"
                    />

                    <InputControlGroup
                        name="password"
                        type="password"
                        placeholder="Password"
                        className={ styles.input }
                        onChange={ passInputHandler }
                        isValid={ passwordState.isValid }
                        errorMessage="Please provide a valid password"
                    />

                    <InputControlGroup
                        name="confirm-password"
                        type="password"
                        placeholder="Confirm Password"
                        className={ styles.input }
                        onChange={ confirmPassInputHandler }
                        isValid={ confirmPasswordState.isValid }
                        errorMessage="Password must match"
                    />

                    <button type="submit">SUBMIT</button>
                    <p className="text-center p-0 mb-0">
                        Already have account? <Link className={ styles['form-link'] } to='/'>Login</Link>
                    </p>
                </form>
            </CardContainer>
        </Container>
    );
}

export default SignUpPage;