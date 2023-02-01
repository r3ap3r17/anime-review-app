import { useEffect } from "react";
import CardContainer from "../CardContainer/CardContainer";
import img from './card-img.webp'; // Image is hardcoded for now
import { Rating } from 'react-simple-star-rating';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "./AnimeCard.module.css";

function AnimeCard({ anime }) {
    // Object that stores data-aos attributes
    const dataAos = {
        'data-aos-duration': "800",
        'data-aos': "zoom-in-right"
    }

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        // { styles[''] }
        <CardContainer
            color="#F5F5FA"
            dataAos={ dataAos }
            className={ styles['movie-card'] }>
            <div className={ styles['movie-card-header'] }>
                <img src={ img } alt="" />
            </div>
            <div className={ `${styles['movie-card-body']} text-start` }>
                <p className={ `${styles['movie-title']} mb-1 ms-1` }>
                    { anime.title }
                </p>
                <p className={ `${styles['movie-genre']} mb-1 ms-1` }>
                    { anime.genre }
                </p>
                <Rating
                    initialValue={ anime.rating }
                    fillColor="#FF4B3D"
                    size={ 25 }
                    readonly
                    allowFraction />
            </div>
        </CardContainer>
    );
}

export default AnimeCard;