import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardContainer from "../UI/CardContainer";
import "./SignUpPage.css";

function SignUpPage() {

    const submitHandler = (form) => {
        form.preventDefault();
        console.log("hello");
    }

    return (
        <Container>
            <CardContainer color="#fff" className="login-form-card">
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
                <form className="login-form" onSubmit={ submitHandler }>
                    <input
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <button type="submit">SUBMIT</button>
                    <p className="text-center p-0">
                        Existing users, login <Link to='/login'>here</Link>
                    </p>
                </form>
            </CardContainer>
        </Container>
    );
}

export default SignUpPage;