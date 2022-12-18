import "./ModalWrapper.css";

function ModalWrapper(props) {
    return (
        <div className="modal-wrapper" onClick={ props.onClick }>
            { props.children }
        </div>
    );
}

export default ModalWrapper;