import { Container } from 'react-bootstrap';
import styles from './ContentWrapper.module.css';

function ContentWrapper(props) {
    return (
        <Container>
            <div className={ styles.wrapper } style={ props.style }>
                { props.children }
            </div>
        </Container>
    );
}

export default ContentWrapper;