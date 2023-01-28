import './CardContainer.css';

function CardContainer(props) {

    return (
        <div
            { ...props.dataAos }
            className={ props.className + " card-container" }
            style={ { backgroundColor: props.color } }>
            { props.children }
        </div>
    );
}

export default CardContainer;