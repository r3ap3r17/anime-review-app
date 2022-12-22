import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import NavButton from "./NavButton";
import NavListItems from "./NavListItems";
import ButtonLogOut from "./ButtonLogOut";
import "./NavBar.css"


function NavBar({ handleToken }) {
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
        <Container fluid="md" className="nav-group pt-4 px-4 px-md-0">
            { button
                ? <NavButton active={ active } activeHandler={ activeHandler } />
                : <NavListItems /> }
            <div className={ (active & button) ? "nav-responsive active" : "nav-responsive" }>
                <NavListItems activeHandler={ activeHandler } />
            </div>
            <ButtonLogOut handleToken={ handleToken } />
        </Container>
    );
}

export default NavBar;