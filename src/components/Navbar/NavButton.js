import './NavButton.css';

function NavButton({ active, activeHandler }) {
    return (
        <button onClick={ activeHandler }
            class={ active ? "hamburger hamburger--spin is-active" : "hamburger hamburger--spin" }
            type="button">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>

    );
}

export default NavButton;