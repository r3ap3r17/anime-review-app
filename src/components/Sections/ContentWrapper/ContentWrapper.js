import { Container } from 'react-bootstrap';
import styles from './ContentWrapper.module.css';

function ContentWrapper(props) {
    return (
        <Container className='mt-5'>
            <div className={ styles.wrapper } style={ props.style }>
                { props.children }
            </div>
        </Container>
    );
}

export default ContentWrapper;