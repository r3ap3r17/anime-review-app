import CardContainer from "../CardContainer/CardContainer";
import img from './card-img.webp'; // Image is hardcoded for now
import "./AnimeCard.css";
import { Rating } from 'react-simple-star-rating';

function AnimeCard({ anime }) {
    return (
        <CardContainer className="movie-card">
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