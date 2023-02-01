import { Container } from "react-bootstrap";
import styles from "./HeaderSection.module.css";
// import imageHellsing from "../../../assets/img/hellsing-ultimate.jpg";
import imageHellsingAlternative from "../../../assets/img/hellsing-ultimate-alt.jpg";
import imageDeathNote from "../../../assets/img/death-note.jpg";
import imageAot from "../../../assets/img/aot.jpg";
import HeaderSlide from "./HeaderSlide";
import { useState } from "react";
import { useEffect } from "react";

const ANIME_HEADER_DATA = [
    {
        title: 'Hellsing Ultimate',
        genre: 'Horror, Action',
        image: imageHellsingAlternative
    },
    {
        title: 'Death Note',
        genre: 'Mystery, Action',
        image: imageDeathNote
    },
    {
        title: 'Attack On Titan',
        genre: 'Mystery, Action',
        image: imageAot
    }
];

// Sleep function
// const sleep = ms => new Promise(r => setTimeout(r, ms));


// ADD INTERVAL ON IMAGE AND TEXT CHANGE

function HeaderSection({ handleLogout }) {
    // const [active, setActive] = useState(true); 
    const [active, setActive] = useState(false);
    const [currentContent, setCurrentContent] = useState(0);

    // const handleImageTimer = (state) => {
    //     setTimeout(() => {
    //         setActive(state);
    //     }, 2000);
    // }

    const randomNumberInRange = (min, max) => {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const fadeAnimationHandler = () => {
        if (window.window.scrollY <= 350) {
            setActive(true);
        }
        if (window.scrollY > 350) {
            setActive(false);
        }
    }

    useEffect(() => {
        setCurrentContent(randomNumberInRange(0, 2));
        fadeAnimationHandler();
    }, [currentContent]);

    window.addEventListener('scroll', fadeAnimationHandler);

    // useEffect(() => {
    //     setActive(true);

    //     // handleImageTimer(!active);

    //     // if (active) {
    //     //     handleImageTimer(false);
    //     // }

    // }, []);

    return (
        <Container fluid className={ `${styles['header-wrapper']} p-0 position-relative` }>
            <HeaderSlide
                currentContent={ currentContent }
                active={ active }
                content={ ANIME_HEADER_DATA }
                handleLogout={ handleLogout } />
        </Container>
    );
}

export default HeaderSection;