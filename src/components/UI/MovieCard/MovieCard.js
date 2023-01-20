import CardContainer from "../CardContainer/CardContainer";
import img from './movie-img.jpg';
import "./MovieCard.css";
import { Rating } from 'react-simple-star-rating';

function MovieCard({ movie }) {
    return (
        <CardContainer className="movie-card">
            <div className="movie-card-header">
                <img src={ img } alt="" />
            </div>
            <div className="movie-card-body">
                <p className="movie-title mb-2 ms-1">
                    { movie.title }
                </p>
                <Rating initialValue={ movie.rating } size={ 30 } readonly />
            </div>
        </CardContainer>
    );
}

export default MovieCard;