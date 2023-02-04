import HeaderSlide from "./HeaderSlide";
import { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import styles from "./HeaderSection.module.css";
// import imageHellsing from "../../../assets/img/hellsing-ultimate.jpg";
import imageHellsingAlternative from "../../../assets/img/hellsing-ultimate-alt.jpg";
import imageDeathNote from "../../../assets/img/death-note.jpg";
import imageAot from "../../../assets/img/aot.jpg";
import imageNaruto from "../../../assets/img/naruto.jpg";
// import { useLayoutEffect } from "react";

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
    },
    {
        title: 'Naruto: Shippuuden',
        genre: 'Adventure, Action',
        image: imageNaruto
    }
];

// Sleep function
// const sleep = ms => new Promise(r => setTimeout(r, ms));


// ADD INTERVAL ON IMAGE AND TEXT CHANGE

function HeaderSection({ handleLogout }) {
    const [active, setActive] = useState(false);
    const [currentContent, setCurrentContent] = useState(0);

    // const randomNumberInRange = (min, max) => {
    //     // 👇️ get number between min (inclusive) and max (inclusive)
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }

    // const fadeAnimationHandler = () => {
    //     if (window.window.scrollY <= 350) {
    //         setActive(true);
    //     }
    //     if (window.scrollY > 350) {
    //         setActive(false);
    //     }
    // }

    const handleSlider = () => {
        setActive(false)
        setTimeout(() => {
            setCurrentContent(currentContent + 1)
            if (currentContent === 3) setCurrentContent(0)
        }, 1000)

    }

    // useLayoutEffect(() => {
    //     fadeAnimationHandler();
    // })

    useEffect(() => {
        // setCurrentContent(randomNumberInRange(0, ANIME_HEADER_DATA.length - 1));
        const timer = setTimeout(() => {
            setActive(true);
        }, 50)
        console.log(currentContent);

        return () => {
            clearTimeout(timer)
        }
    }, [currentContent]);

    // window.addEventListener('scroll', fadeAnimationHandler);

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
                handleSlider={ handleSlider } />
        </Container>
    );
}

export default HeaderSection;