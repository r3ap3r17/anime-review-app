import styles from "./ButtonLogOut.module.css";

function ButtonLogOut({ handleLogout }) {
    return (
        <button
            id="logout-btn"
            className={ styles['logout-btn'] }
            type="button"
            onClick={ handleLogout } >
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
    );
}

export default ButtonLogOut;