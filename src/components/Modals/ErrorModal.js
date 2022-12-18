import ModalWrapper from "./ModalWrapper";
import "./ErrorModal.css";
import CardContainer from "../UI/CardContainer";

function ErrorModal(activeModal) {
    return (
        <ModalWrapper>
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
                    <button className="">Okay</button>
                </div>
            </CardContainer>
        </ModalWrapper>
    );
}

export default ErrorModal;