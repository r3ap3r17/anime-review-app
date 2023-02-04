import styles from "./NextSlideButton.module.css";

function NextSlideButton(props) {
    return (
        <button
            className={ `${styles.button} ${props.className}` }
            id={ props.id }
            onClick={ props.onClick }>
            <i class="fa-solid fa-arrow-right"></i>
        </button>
    );
}

export default NextSlideButton;