import styles from "./PlayButton.module.css";

function PlayButton({ linkTo }) {


    return (
        <button
            type="button"
            className={ styles.button }
            onClick={ () => {
                window.open(linkTo, '_blank')
            } }>
            Watch Trailer <i class="fa-regular fa-circle-play ms-2"></i>
        </button>
    );
}

export default PlayButton;