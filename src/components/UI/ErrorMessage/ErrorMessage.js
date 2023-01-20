import './ErrorMessage.css';

function ErrorMessage(props) {
    return (
        <p className={ props.className + " error" }>
            <i class="fa-solid fa-triangle-exclamation me-2"></i>
            { props.children }
        </p>
    );
}

export default ErrorMessage;