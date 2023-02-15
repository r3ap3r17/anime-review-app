import { Container } from 'react-bootstrap';
import styles from './SubscribeSection.module.css';

function SubscribeSection() {
    return (
        <section id="subscribe" className="p-5 text-center">
            <Container className='py-5'>
                <h1 className={ styles.title }>
                    Welcome to the world of Anime!
                </h1>
                <p className={ styles.text }>
                    Enter your email address to receive notifications
                </p>
                <div className="d-flex py-5 w-100 justify-content-center">
                    <input
                        className={ styles.input }
                        placeholder='user@gmail.com' />
                    <button className={ `${styles.button} ms-2` }>
                        <i class="fa-regular fa-envelope"></i>
                    </button>
                </div>
            </Container>
        </section>
    );
}

export default SubscribeSection;