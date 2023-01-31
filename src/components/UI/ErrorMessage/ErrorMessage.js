import styles from './ErrorMessage.module.css';

function ErrorMessage(props) {
    return (
        <p className={ `${styles[props.className]} ${styles.error}` }>
            <i class="fa-solid fa-triangle-exclamation me-2"></i>
            { props.children }
        </p>
    );
}

export default ErrorMessage;