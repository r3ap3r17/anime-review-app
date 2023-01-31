import styles from './CardContainer.module.css';

function CardContainer(props) {

    return (
        <div
            { ...props.dataAos }
            className={ props.className + ` ${styles['card-container']}` }
            style={ { backgroundColor: props.color } }>
            { props.children }
        </div>
    );
}

export default CardContainer;