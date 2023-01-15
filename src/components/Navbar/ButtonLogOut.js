import "./ButtonLogOut.css";

function ButtonLogOut({ handleLogout }) {
    return (
        <button type="button" id="logout-btn" onClick={ handleLogout } >
            Log Out
        </button>
    );
}

export default ButtonLogOut;