import { useEffect, useState } from "react";
import "./HeaderSection.css";
import { Container } from "react-bootstrap";
import NavBar from "../../Navbar/NavBar";
import PlayButton from "../../UI/PlayButton/PlayButton";
import BackgroundImage from "../../UI/BackgroundImage/BackgroundImage";

function HeaderSection({ handleLogout, animes }) {
    const [fadeMove, setFadeMove] = useState(false);

    const fadeAnimationHandler = () => {
        if (window.window.scrollY <= 300) {
            setFadeMove(true);
        }
        if (window.scrollY > 300) {
            setFadeMove(false);
        }
    }

    useEffect(() => {
        fadeAnimationHandler();
    }, []);
    window.addEventListener('scroll', fadeAnimationHandler);


    return (
        <Container fluid className="p-0 position-relative header-wrapper">
            {/* BACKGROUND IMAGE */ }
            <BackgroundImage imageLink={ animes[0].image } />
            <NavBar handleLogout={ handleLogout } />
            <header style={ { height: "85vh" } } className="d-flex align-items-center">
                <Container className="header-content mb-5 text-center text-sm-start">
                    <h1 className={ `header-title ${fadeMove && "fade-move"}` }>
                        { animes[0].title }
                    </h1>
                    <p className={ `header-description mb-5 ${fadeMove && "fade-move"}` }>
                        { animes[0].genre }
                    </p>
                    <PlayButton
                        id="playBtn"
                        className={ `button-play ${fadeMove && "fade-move"}` }
                        linkTo={ "https://example.com" } />
                </Container>
            </header>
        </Container>
    );
}

export default HeaderSection;