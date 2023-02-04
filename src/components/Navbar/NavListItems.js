import { Link } from "react-router-dom";
import styles from "./NavListItems.module.css";

function NavListItems({ activeHandler }) {

    const setLinkText = (link) => {
        sessionStorage.setItem('link', link);
    }

    return (
        <ul className="mx-auto">
            <li className={ `${styles['nav-item']} mx-3` }>
                <Link onClick={ (e) => {
                    setLinkText(e.target.text);
                    activeHandler();
                } }
                    className={ sessionStorage.getItem('link') === 'animes' ? styles.active : null }
                    to='/'>animes</Link>
            </li>
            <li className={ `${styles['nav-item']} mx-3` }>
                <Link onClick={ (e) => {
                    setLinkText(e.target.text);
                    activeHandler();
                } }
                    className={ sessionStorage.getItem('link') === 'news' ? styles.active : null }
                    to='/news'>news</Link>
            </li>
            <li className={ `${styles['nav-item']} mx-3` }>
                <Link onClick={ (e) => {
                    setLinkText(e.target.text);
                    activeHandler();
                } }
                    className={ sessionStorage.getItem('link') === 'about' ? styles.active : null }
                    to='/about'>about</Link>
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