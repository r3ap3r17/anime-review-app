// import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NextSlideButton from "../../UI/NextSlideButton/NextSlideButton";
import PlayButton from "../../UI/PlayButton/PlayButton";
import styles from "./HeaderContent.module.css";

function HeaderContent(props) {

    return (
        <header style={ { height: "85vh", paddingTop: "86px" } } className="d-flex align-items-center">
            <Container className="header-content mb-5 text-center text-sm-start">
                <h1 className={ `${styles['header-title']} ${props.active && styles['fade-move']}` }>
                    { props.content.title }
                </h1>
                <p className={ `${styles['header-description']} mb-5 ${props.active && styles['fade-move']}` }>
                    { props.content.genre }
                </p>
                <div className="d-flex">
                    <PlayButton
                        id="playBtn"
                        className={ `${styles['button-play']} ${props.active && styles['fade-move']}` }
                        linkTo={ "https://example.com" } />
                    <NextSlideButton
                        onClick={ props.handleSlider }
                        className={ `${styles['button-play']} ${props.active && styles['fade-move']}` } />
                </div>
            </Container>
        </header>
    );
}

export default HeaderContent;