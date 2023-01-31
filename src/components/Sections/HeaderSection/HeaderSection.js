import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "../../Navbar/NavBar";
import PlayButton from "../../UI/PlayButton/PlayButton";
import BackgroundImage from "../../UI/BackgroundImage/BackgroundImage";
import styles from "./HeaderSection.module.css";

function HeaderSection({ handleLogout, animes }) {
    const [fadeMove, setFadeMove] = useState(false);

    const fadeAnimationHandler = () => {
        if (window.window.scrollY <= 250) {
            setFadeMove(true);
        }
        if (window.scrollY > 250) {
            setFadeMove(false);
        }
    }

    useEffect(() => {
        fadeAnimationHandler();
    }, []);
    window.addEventListener('scroll', fadeAnimationHandler);


    return (
        <Container fluid className={ `${styles['header-wrapper']} p-0 position-relative` }>
            {/* BACKGROUND IMAGE */ }
            <BackgroundImage imageLink={ animes[0].image } />
            <NavBar handleLogout={ handleLogout } />
            <header style={ { height: "85vh" } } className="d-flex align-items-center">
                <Container className="header-content mb-5 text-center text-sm-start">
                    <h1 className={ `${styles['header-title']} ${fadeMove && styles['fade-move']}` }>
                        { animes[0].title }
                    </h1>
                    <p className={ `${styles['header-description']} mb-5 ${fadeMove && styles['fade-move']}` }>
                        { animes[0].genre }
                    </p>
                    <PlayButton
                        id="playBtn"
                        className={ `${styles['button-play']} ${fadeMove && styles['fade-move']}` }
                        linkTo={ "https://example.com" } />
                </Container>
            </header>
        </Container>
    );
}

export default HeaderSection;