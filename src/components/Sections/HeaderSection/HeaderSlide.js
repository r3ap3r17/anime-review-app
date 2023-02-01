import NavBar from "../../Navbar/NavBar";
import BackgroundImage from "../../UI/BackgroundImage/BackgroundImage";
import HeaderContent from "./HeaderContent";

function HeaderSlide(props) {
    return (
        <>
            <BackgroundImage
                active={ props.active }
                imageLink={ props.content[props.currentContent].image } />
            <NavBar
                handleLogout={ props.handleLogout } />
            <HeaderContent
                active={ props.active }
                content={ props.content[props.currentContent] }
            />
        </>
    );
}

export default HeaderSlide;