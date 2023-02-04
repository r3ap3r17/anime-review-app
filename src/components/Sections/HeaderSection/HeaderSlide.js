import BackgroundImage from "../../UI/BackgroundImage/BackgroundImage";
import HeaderContent from "./HeaderContent";

function HeaderSlide(props) {
    return (
        <>
            <BackgroundImage
                active={ props.active }
                imageLink={ props.content[props.currentContent].image } />
            <HeaderContent
                active={ props.active }
                content={ props.content[props.currentContent] }
                handleSlider={ props.handleSlider }
            />
        </>
    );
}

export default HeaderSlide;