import React from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './LoginForm.module.scss';
import Button from 'components/Button/Button';
import axios from 'axios';

interface ValuesForm {
    email: string;
    password: string;
}

const initialValues: ValuesForm = {
    email: '',
    password: '',
};

const LoginForm: React.FC = () => {
    const handleSubmit = async (valuesForm: ValuesForm) => {
        const{email, password} = valuesForm
        await axios
            .post(
                'https://appwba.herokuapp.com/authentication_token',
                {
                    email: email,
                    password: password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            )
            .then((response) => {
                const {token} = response.data
                if (response) {
                    axios
                        .get(`https://appwba.herokuapp.com/api/users?email=&{email}`, {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + token,
                                'Accept':'application/json'
                            },
                        })
                        .then((res) => {
                            console.log(res)
                        });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.formHeader}>Logowanie:</div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ errors, touched }) => (
                    <Form className={styles.form}>
                        <div className={styles.formItem}>
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" className={styles.input} />
                            <div className={styles.formItemBar} />
                            {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="password">Hasło</label>
                            <Field name="password" type="password" className={styles.input} />
                            <div className={styles.formItemBar} />
                        </div>
                        <Button type="submit">Zaloguj</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
export default LoginForm;
