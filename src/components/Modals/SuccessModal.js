import ModalWrapper from "./ModalWrapper";
import styles from "./SuccessModal.module.css";
import CardContainer from "../UI/CardContainer/CardContainer";

function SuccessModal(props) {
    return (
        <ModalWrapper onClick={ props.modalHandler }>
            <CardContainer className={ styles['success-modal'] }>
                <div className={ styles['success-modal-header'] }>
                    <p>
                        Success !
                    </p>
                </div>
                <div className={ styles['success-modal-body'] }>
                    <p>
                        { props.children }
                    </p>
                </div>
                <div className={ `${styles['success-modal-footer']} text-end` }>
                    <button type="button" onClick={ props.modalHandler }>Okay</button>
                </div>
            </CardContainer>
        </ModalWrapper>);
}

export default SuccessModal;