import { useState } from "react";

function NavListItems({ activeHandler }) {
    const [activeLink, setActiveLink] = useState('home');
    return (
        <ul>
            <li className="nav-item mx-3">
                <a onClick={ () => {
                    setActiveLink('home');
                    activeHandler();
                } }
                    className={ activeLink === 'home' ? 'active' : null }
                    href="#home">Home</a>
            </li>
            <li className="nav-item mx-3">
                <a onClick={ () => {
                    setActiveLink('about');
                    activeHandler();
                } }
                    className={ activeLink === 'about' ? 'active' : null }
                    href="#about">About</a>
            </li>
            <li className="nav-item mx-3">
                <a onClick={ () => {
                    setActiveLink('faq');
                    activeHandler();
                } }
                    className={ activeLink === 'faq' ? 'active' : null }
                    href="#faq">FAQs</a>
            </li>
            {/* <li className="nav-item mx-3">
                <a onClick={ () => {
                    setActiveLink('contact');
                    activeHandler();
                } }
                    className={ activeLink === 'contact' ? 'active' : null }
                    href="#contact">Contact us</a>
            </li> */}
        </ul>
    );
}

export default NavListItems;