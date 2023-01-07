import './CloseButton.css';

function CloseButton({ activeHandler, className }) {
    return (
        // ADD CUSTOM CODE FOR X BUTTON
        <button onClick={ activeHandler }
            class={ className + " hamburger hamburger--spin is-active" }
            type="button" >
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button >

    );
}

export default CloseButton;