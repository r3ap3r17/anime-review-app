import styles from "./BackgroundImage.module.css";

function BackgroundImage(props) {

    return (
        <div className={ styles.background }>
            <img
                className={ `${styles.image} ${props.active && styles.slide}` }
                src={ props.imageLink }
                alt="background"
                loading="lazy" />
        </div>
    );
}

export default BackgroundImage;