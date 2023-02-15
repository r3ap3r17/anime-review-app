import ErrorMessage from "../ErrorMessage/ErrorMessage";

function InputControlGroup(props) {
    return (
        <>
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
        </>
    );
}

export default InputControlGroup;