import * as React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import styles from './RegisterForm.module.scss';
import Button from 'components/Button/Button';
interface ValuesForm {
    firstName: string;
    lastName: string;
    email: string;
    password1: string;
    password2: string;
    club: string;
    termsOfService: boolean;
}

interface Props {
    onSubmit: (values: ValuesForm) => void;
}

const RegisterForm: React.FunctionComponent<Props> = ({ onSubmit }) => {
    const formSchema = Yup.object().shape({
        firstName: Yup.string().min(3, 'Imię musi mieć minimum 3 znaki').required('Uzupełnij Imię'),
        lastName: Yup.string().min(3, 'Nazwisko musi mieć minimum 3 znaki').required('Uzupełnij Nazwisko'),
        email: Yup.string().min(3, 'Imie musi posiadać 3').required('Podaj adres e-mail'),
        password1: Yup.string().min(8, 'Hasło musi mieć minimum 8 znaków').required('Podaj hasło'),
        password2: Yup.string()
            .oneOf([Yup.ref('password1'), undefined], 'Hasła nie są jednakowe')
            .required('Powtórz hasło'),
        club: Yup.string().required('Wybierz klub'),
        termsOfService: Yup.boolean()
            .required('Zakceptuj warunki korzystania z serwisu.')
            .oneOf([true], 'Zakcpetuj warunki korzystania z serwisu.'),
    });

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
                    termsOfService: false,
                }}
                validationSchema={formSchema}
                onSubmit={(values) => {
                    console.log(values);
                    onSubmit(values);
                }}
            >
                {({ errors, values, touched }) => (
                    <Form className={styles.form}>
                        <div className={styles.formItem}>
                            <label htmlFor="firstName">Imię</label>
                            <Field name="firstName" type="text" className={styles.input} />
                            <div className={styles.formItemBar} />
                            {errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="lastName">Nazwisko</label>
                            <Field name="lastName" type="text" className={styles.input} />
                            <div className={styles.formItemBar} />
                            {errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" className={styles.input} />
                            <div className={styles.formItemBar} />
                            {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="password1">Hasło</label>
                            <Field name="password1" type="password" className={styles.input} />
                            <div className={styles.formItemBar} />
                            {errors.password1 && touched.password1 ? <div>{errors.password1}</div> : null}
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="password2">Powtórz hasło</label>
                            <Field name="password2" type="password" className={styles.input} />
                            <div className={styles.formItemBar} />
                            {errors.password2 && touched.password2 ? <div>{errors.password2}</div> : null}
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="password2">Wybierz klub</label>
                            <Field as="select" name="club" className={styles.input}>
                                <option value=""></option>
                                <option value="/api/clubs/1">Club 1</option>
                                <option value="/api/clubs/2">Club 2</option>
                            </Field>
                            <div className={styles.formItemBar} />
                            {errors.club && touched.club ? <div>{errors.club}</div> : null}
                        </div>
                        <label htmlFor="termsOfService">Akceptuję warunki korzystania z serwisu</label>
                        <Field name="termsOfService" type="checkbox" className={styles.checkbox} />
                        <div className={styles.formItemBar} />
                        {errors.termsOfService && touched.termsOfService ? <div>{errors.termsOfService}</div> : null}
                        <br />
                        <Button type="submit">Zarejestruj</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;
