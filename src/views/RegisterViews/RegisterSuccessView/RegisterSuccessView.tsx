import React from 'react';
import styles from './RegisterSuccessView.module.scss';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';
const RegisterSuccessView: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                Rejstracja udana. Wysłaliśmy na podany mail link aktywacyjny sprawdź pocztę. W razie braku maila w
                głównym katalogu sprawdź także spam.
            </div>
            <div className={styles.buttons}>
                <Button>
                    <Link className={styles.link} to="/">
                        Wróć do strony głównej
                    </Link>
                </Button>
                <Button>Zaloguj się</Button>
            </div>
        </div>
    );
};

export default RegisterSuccessView;
