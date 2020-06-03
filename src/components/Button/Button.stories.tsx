import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
    .add('SignUp', () => <Button>Zarejestruj się</Button>)
    .add('SignIn', () => <Button>Zaloguj się</Button>);
