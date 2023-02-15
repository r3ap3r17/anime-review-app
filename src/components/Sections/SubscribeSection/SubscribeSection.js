import { useState } from 'react';
import { Container } from 'react-bootstrap';
import SuccessModal from '../../Modals/SuccessModal';
import InputControlGroup from '../../UI/InputControlGroup/InputControlGroup';
import styles from './SubscribeSection.module.css';

const validateEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function SubscribeSection() {
    const [successModal, setSuccessModal] = useState(null);
    const [emailIsValid, setEmailIsValid] = useState(null);

    const emailhandler = () => {
        setEmailIsValid(validateEmail('userAgmail.com'));
        setSuccessModal(validateEmail('userAgmail.com'));
    }

    const successModalHandler = () => {
        setSuccessModal(false);
    }

    return (
        <>
            {/* its placing modal in header for some reason ?!?!?! */ }
            {
                successModal &&
                <SuccessModal modalHandler={ successModalHandler }>
                    You subscribed !
                </SuccessModal>
            }
            <section id="subscribe" className="p-5 text-center">
                <Container className='py-5'>
                    <h1 className={ styles.title }>
                        Welcome to the world of Anime!
                    </h1>
                    <p className={ styles.text }>
                        Enter your email address to receive notifications
                    </p>
                    <div className="d-flex py-5 w-100 justify-content-center">
                        <InputControlGroup
                            name="email"
                            type="text"
                            className={ styles.input }
                            placeholder='user@gmail.com'
                            isValid={ emailIsValid }
                            errorMessage="Provide a valid email !"
                        />

                        <button
                            onClick={ emailhandler }
                            className={ `${styles.button} ms-2` }>
                            <i class="fa-regular fa-envelope"></i>
                        </button>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default SubscribeSection;