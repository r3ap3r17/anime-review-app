import CardContainer from "../CardContainer/CardContainer";
import img from './movie-img.jpg'; // Image is hardcoded for now
import "./MovieCard.css";
import { Rating } from 'react-simple-star-rating';

function MovieCard({ movie }) {
    return (
        <CardContainer className="movie-card">
            <div className="movie-card-header">
                <img src={ img } alt="" />
            </div>
            <div className="movie-card-body text-start">
                <p className="movie-title mb-0 ms-1">
                    { movie.title }
                </p>
                <br />
                <p className="movie-genre mb-0 ms-1">
                    { movie.genre }
                </p>
                <Rating initialValue={ movie.rating } size={ 30 } readonly allowFraction />
            </div>
        </CardContainer>
    );
}

export default MovieCard;