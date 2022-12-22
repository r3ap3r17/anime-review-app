import "./ButtonLogOut.css";

function ButtonLogOut({ handleToken }) {
    return (
        <button type="button" id="logout-btn" onClick={ handleToken } >
            Log Out
        </button>
    );
}

export default ButtonLogOut;