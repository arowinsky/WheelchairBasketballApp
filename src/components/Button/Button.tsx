import React from 'react';
import styles from './Button.module.scss';

interface Props {
    children: any;
}

const Button = ({ children }: Props) => {
    return <button className={styles.button}>{children}</button>;
};

export default Button;
