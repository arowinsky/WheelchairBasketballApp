import React from 'react';
import styles from './HomeView.module.scss';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';

const HomeView: React.FC = () => (
    <div className={styles.wrapper}>
        <Button>
            <Link className={styles.link} to="/register">
                Zarejestruj się
            </Link>
        </Button>
        <Button>
          <Link className={styles.link} to="/login">
              Zaloguj się
            </Link>
        </Button>
    </div>
);

export default HomeView;
