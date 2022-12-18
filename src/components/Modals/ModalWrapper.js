import "./ModalWrapper.css";

function ModalWrapper(props) {
    return (
        <div className="modal-wrapper">
            { props.children }
        </div>
    );
}

export default ModalWrapper;