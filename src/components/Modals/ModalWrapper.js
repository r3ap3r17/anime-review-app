import styles from "./ModalWrapper.module.css";

function ModalWrapper(props) {
    return (
        <div className={ styles['modal-wrapper'] } onClick={ props.onClick }>
            { props.children }
        </div>
    );
}

export default ModalWrapper;