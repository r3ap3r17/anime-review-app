import styles from './CloseButton.module.css';

function CloseButton({ activeHandler, className }) {
    return (
        <button onClick={ activeHandler }
            class={ className + ` ${styles['close-btn']}` }
            type="button" >
            <span class={ styles['close-btn-box'] }>
                <span class={ styles['close-span'] }></span>
            </span>
        </button >

    );
}

export default CloseButton;