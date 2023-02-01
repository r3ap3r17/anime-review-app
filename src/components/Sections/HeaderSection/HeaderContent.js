// import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import PlayButton from "../../UI/PlayButton/PlayButton";
import styles from "./HeaderContent.module.css";

function HeaderContent(props) {

    return (
        <header style={ { height: "85vh" } } className="d-flex align-items-center">
            <Container className="header-content mb-5 text-center text-sm-start">
                <h1 className={ `${styles['header-title']} ${props.active && styles['fade-move']}` }>
                    { props.content.title }
                </h1>
                <p className={ `${styles['header-description']} mb-5 ${props.active && styles['fade-move']}` }>
                    { props.content.genre }
                </p>
                <PlayButton
                    id="playBtn"
                    className={ `${styles['button-play']} ${props.active && styles['fade-move']}` }
                    linkTo={ "https://example.com" } />
            </Container>
        </header>
    );
}

export default HeaderContent;