import { Container } from "react-bootstrap";
import "./HeaderSection.css";

import NavBar from "../../Navbar/NavBar";
import PlayButton from "../../UI/PlayButton/PlayButton";
import BackgroundImage from "../../UI/BackgroundImage/BackgroundImage";

function HeaderSection({ handleLogout, animes }) {
    return (
        <Container fluid className="p-0 position-relative header-wrapper">
            {/* BACKGROUND IMAGE */ }
            <BackgroundImage imageLink={ animes[0].image } />
            <NavBar handleLogout={ handleLogout } />
            <header style={ { height: "85vh" } } className="d-flex align-items-center">
                <Container className="header-content mb-5 text-center text-sm-start">
                    <h1 className="header-title">
                        { animes[0].title }
                    </h1>
                    <p className="header-description mb-5">
                        { animes[0].genre }
                    </p>
                    <PlayButton linkTo={ "https://example.com" } />
                </Container>
            </header>
        </Container>
    );
}

export default HeaderSection;