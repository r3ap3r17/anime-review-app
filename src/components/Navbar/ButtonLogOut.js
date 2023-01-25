import "./ButtonLogOut.css";

function ButtonLogOut({ handleLogout }) {
    return (
        <button type="button" id="logout-btn" onClick={ handleLogout } >
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
    );
}

export default ButtonLogOut;