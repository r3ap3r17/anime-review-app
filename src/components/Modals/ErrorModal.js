import ModalWrapper from "./ModalWrapper";
import styles from "./ErrorModal.module.css";
import CardContainer from "../UI/CardContainer/CardContainer";

function ErrorModal(props) {
    return (
        <ModalWrapper onClick={ props.modalHandler }>
            <CardContainer className={ styles['error-modal'] }>
                <div className={ styles['error-modal-header'] }>
                    <p>
                        Error !
                    </p>
                </div>
                <div className={ styles['error-modal-body'] }>
                    <p>
                        { props.children }
                    </p>
                </div>
                <div className={ `${styles['error-modal-footer']} text-end` }>
                    <button type="button" onClick={ props.modalHandler }>Okay</button>
                </div>
            </CardContainer>
        </ModalWrapper>
    );
}

export default ErrorModal;