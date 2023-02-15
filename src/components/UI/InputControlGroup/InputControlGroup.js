import ErrorMessage from "../ErrorMessage/ErrorMessage";
import styles from "./InputControlGroup.module.css";

function InputControlGroup(props) {
    return (
        <div className={ styles.group }>
            <input
                name={ props.name }
                type={ props.type }
                className={ props.className }
                placeholder={ props.placeholder }
                onChange={ props.onChange }
            />
            <ErrorMessage className={ props.isValid === false ? 'invalid' : null }>
                { props.errorMessage }
            </ErrorMessage>
        </div>
    );
}

export default InputControlGroup;