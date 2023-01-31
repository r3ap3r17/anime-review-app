import styles from './NavButton.module.css';

function NavButton({ active, activeHandler }) {
    return (
        <button onClick={ activeHandler }
            class={ active
                ?
                `${styles['hamburger']} ${styles['hamburger--spin']} ${styles['is-active']}`
                :
                `${styles['hamburger']} ${styles['hamburger--spin']}` }
            type="button">
            <span class={ styles['hamburger-box'] }>
                <span class={ styles['hamburger-inner'] }></span>
            </span>
        </button>

    );
}

export default NavButton;