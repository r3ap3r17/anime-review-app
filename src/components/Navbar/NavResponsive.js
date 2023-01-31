import CloseButton from "../UI/CloseButton/CloseButton";
import NavListItems from "./NavListItems";
import styles from "./NavResponsive.module.css"

function NavResponsive(props) {
    return (
        <div className={ (props.active & props.button)
            ?
            `${styles['nav-responsive']} ${styles['active']}`
            :
            `${styles['nav-responsive']}` }>
            <NavListItems activeHandler={ props.activeHandler } />
            <CloseButton
                className={ styles['nav-close-btn'] }
                id="nav-close-btn"
                activeHandler={ props.activeHandler }
            />
        </div>
    );
}

export default NavResponsive;