import { useState } from "react";
import styles from "./NavListItems.module.css";

function NavListItems({ activeHandler }) {
    const [activeLink, setActiveLink] = useState('animes');
    return (
        <ul className="mx-auto">
            <li className={ `${styles['nav-item']} mx-3` }>
                <a onClick={ (e) => {
                    setActiveLink(e.target.text);
                    activeHandler();
                } }
                    className={ activeLink === 'animes' ? styles.active : null }
                    href="#home">animes</a>
            </li>
            <li className={ `${styles['nav-item']} mx-3` }>
                <a onClick={ (e) => {
                    setActiveLink(e.target.text);
                    activeHandler();
                } }
                    className={ activeLink === 'news' ? styles.active : null }
                    href="#about">news</a>
            </li>
            <li className={ `${styles['nav-item']} mx-3` }>
                <a onClick={ (e) => {
                    setActiveLink(e.target.text);
                    activeHandler();
                } }
                    className={ activeLink === 'faqs' ? styles.active : null }
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