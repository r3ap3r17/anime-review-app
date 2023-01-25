import styles from "./BackgroundImage.module.css";

function BackgroundImage({ imageLink }) {
    return (
        <div className={ styles.background }>
            <img
                src={ imageLink }
                alt="background" />
        </div>
    );
}

export default BackgroundImage;