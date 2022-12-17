import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardContainer from "../UI/CardContainer";
import "./LoginPage.css";

function LoginPage() {

    const submitHandler = (form) => {
        form.preventDefault();
        console.log("hello");
    }

    return (
        <Container>
            <CardContainer color="#fff" className="login-form-card">
                <h2 className="mx-auto text-center mb-4"
                    style={ {
                        fontSize: "22px",
                        color: "#2a3444"
                    } }>Login</h2>
                <form className="login-form" onSubmit={ submitHandler }>
                    <input
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        placeholder="Password"
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