import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import NavButton from "./NavButton";
import NavListItems from "./NavListItems";
import ButtonLogOut from "./ButtonLogOut";
import styles from "./NavBar.module.css"
import NavResponsive from "./NavResponsive";



function NavBar({ handleLogout }) {
    const [button, setButton] = useState(false);
    const [active, setActive] = useState(false);

    const activeHandler = () => setActive(!active);

    const showButton = () => {
        if (window.innerWidth <= 768) {
            setButton(true)
        } else {
            setButton(false)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <div className={ styles['nav-wrapper'] }>
            <Container fluid="md" className={ `${styles['nav-group']} py-0 pt-4 px-4 px-md-0` }>
                { button
                    ? <NavButton active={ active } activeHandler={ activeHandler } />
                    : <NavListItems /> }
                <NavResponsive
                    active={ active }
                    button={ button }
                    activeHandler={ activeHandler } />
                <ButtonLogOut handleLogout={ handleLogout } />
            </Container>
        </div>
    );
}

export default NavBar;