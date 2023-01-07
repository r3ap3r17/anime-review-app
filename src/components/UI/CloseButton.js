import './CloseButton.css';

function CloseButton({ activeHandler, className }) {
    return (
        <button onClick={ activeHandler }
            class={ className + " close-btn" }
            type="button" >
            <span class="close-btn-box">
                <span class="close-span"></span>
            </span>
        </button >

    );
}

export default CloseButton;