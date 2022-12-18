import ModalWrapper from "./ModalWrapper";
import "./ErrorModal.css";
import CardContainer from "../UI/CardContainer";

function ErrorModal(props) {
    return (
        <ModalWrapper onClick={ props.modalHandler }>
            <CardContainer className="error-modal">
                <div className="error-modal-header">
                    <p>
                        Error !
                    </p>
                </div>
                <div className="error-modal-body">
                    <p>
                        Please fill all fields !
                    </p>
                </div>
                <div className="error-modal-footer text-end">
                    <button type="button" onClick={ props.modalHandler }>Okay</button>
                </div>
            </CardContainer>
        </ModalWrapper>
    );
}

export default ErrorModal;