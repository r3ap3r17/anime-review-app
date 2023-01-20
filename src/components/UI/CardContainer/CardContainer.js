import './CardContainer.css';

function CardContainer(props) {
    return (
        <div
            className={ props.className + " card-container" }
            style={ { backgroundColor: props.color } }>
            { props.children }
        </div>
    );
}

export default CardContainer;