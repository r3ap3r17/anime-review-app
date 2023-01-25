import { useState } from "react";

function NavListItems({ activeHandler }) {
    const [activeLink, setActiveLink] = useState('movies');
    return (
        <ul className="mx-auto">
            <li className="nav-item mx-3">
                <a onClick={ (e) => {
                    setActiveLink(e.target.text);
                    activeHandler();
                } }
                    className={ activeLink === 'movies' ? 'active' : null }
                    href="#home">movies</a>
            </li>
            <li className="nav-item mx-3">
                <a onClick={ (e) => {
                    setActiveLink(e.target.text);
                    activeHandler();
                } }
                    className={ activeLink === 'news' ? 'active' : null }
                    href="#about">news</a>
            </li>
            <li className="nav-item mx-3">
                <a onClick={ (e) => {
                    setActiveLink(e.target.text);
                    activeHandler();
                } }
                    className={ activeLink === 'faqs' ? 'active' : null }
                    href="#faq">faqs</a>
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