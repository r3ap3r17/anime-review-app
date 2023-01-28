import styles from "./PlayButton.module.css";

function PlayButton({ linkTo, id, className }) {


    return (
        <button
            id={ id }
            type="button"
            className={ `${className} ${styles.button}` }
            onClick={ () => {
                window.open(linkTo, '_blank')
            } }>
            Watch Trailer <i class="fa-regular fa-circle-play ms-2"></i>
        </button>
    );
}

export default PlayButton;