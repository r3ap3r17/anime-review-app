import { Container } from "react-bootstrap";
import "./HeaderSection.css";

import NavBar from "../../Navbar/NavBar";

function HeaderSection({ handleLogout }) {
    return (
        <Container fluid className="p-0">
            <img className="background-image" src="https://images.pexels.com/photos/8474475/pexels-photo-8474475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="background" />
            <NavBar handleLogout={ handleLogout } />
            <header style={ { height: "100vh" } }>

            </header>
        </Container>
    );
}

export default HeaderSection;