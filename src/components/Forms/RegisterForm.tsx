import React from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './RegisterForm.module.scss';
import Button from 'components/Button/Button';
const RegisterForm = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.formHeader}>Rejestracja:</div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password1: '',
                    password2: '',
                    club: '',
                    statute: false,
                }}
                onSubmit={() => {
                    console.log('sended');
                }}
            >
                {() => (
                    <Form className={styles.form}>
                        <div className={styles.formItem}>
                            <label htmlFor="firstname">Imię</label>
                            <Field name="firstname" type="text" className={styles.input} />
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="lastname">Nazwisko</label>
                            <Field name="lastname" type="text" className={styles.input} />
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" className={styles.input} />
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="password1">Hasło</label>
                            <Field name="password1" type="password" className={styles.input} />
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="password2">Powtórz hasło</label>
                            <Field name="password2" type="password" className={styles.input} />
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="password2">Wybierz klub</label>
                            <Field as="select" name="club" className={styles.input}>
                                <option value="Club1">Club 1</option>
                                <option value="Club2">Club 2</option>
                            </Field>
                        </div>
                        <label htmlFor="statute">Akceptuję warunki korzystania z serwisu</label>
                        <Field name="statute" type="checkbox" className={styles.checkbox} />
                        <br />
                        <Button>Zarejestruj</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;
