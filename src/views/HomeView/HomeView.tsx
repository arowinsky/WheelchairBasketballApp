import React from 'react';
import styles from './HomeView.module.scss';
import Button from 'components/Button/Button';

const HomeView: React.FunctionComponent = () => (
    <div className={styles.wrapper}>
        <Button>Zarejestruj się</Button>
    </div>
);

export default HomeView;
