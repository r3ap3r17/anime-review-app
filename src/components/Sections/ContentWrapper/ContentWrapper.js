import { Container } from 'react-bootstrap';
import './ContentWrapper.css';

function ContentWrapper(props) {
    return (
        <Container className='mt-5'>
            <div className="wrapper" style={ props.style }>
                { props.children }
            </div>
        </Container>
    );
}

export default ContentWrapper;