import { useEffect } from "react";
import CardContainer from "../CardContainer/CardContainer";
import img from './card-img.webp'; // Image is hardcoded for now
import "./AnimeCard.css";
import { Rating } from 'react-simple-star-rating';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        <CardContainer
            dataAos={ dataAos }
            className="movie-card">
            <div className="movie-card-header">
                <img src={ img } alt="" />
            </div>
            <div className="movie-card-body text-start">
                <p className="movie-title mb-0 ms-1">
                    { anime.title }
                </p>
                <br />
                <p className="movie-genre mb-0 ms-1">
                    { anime.genre }
                </p>
                <Rating initialValue={ anime.rating } size={ 30 } readonly allowFraction />
            </div>
        </CardContainer>
    );
}

export default AnimeCard;