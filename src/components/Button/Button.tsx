import React from 'react';
import styles from './Button.module.scss';
interface Props {
    children: any;
    type?: 'submit' | undefined;
}

const Button = ({ children, ...props }: Props) => {
    return (
        <button className={styles.button} {...props}>
            {children}
        </button>
    );
};

export default Button;
