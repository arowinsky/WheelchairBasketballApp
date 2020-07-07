import React, { useState } from 'react';
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
    const [data, setData] = useState({});
    const handleSubmit = async (valuesForm: ValuesForm) => {
        await axios
            .post(
                'https://localhost:8000/authentication_token',
                {
                    email: valuesForm.email,
                    password: valuesForm.password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            )
            .then((response) => {
                console.log(response);
                const {token} = response.data
                if (response) {
                    console.log("no siema" + token)
                    axios
                        .get(`https://localhost:8000/api/clubs`, {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + token,
                                'Accept':'application/json'
                            },
                        })
                        .then((res) => {
                            console.log(res);
                        });
                    setData(response);
                    console.log('In state:' + response.data);
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
